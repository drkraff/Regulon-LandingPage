# Waitlist Backend & Security Plan

**Purpose:** Plan for waitlist signup persistence (DB + API) and security measures so lead data is accessible only to you, plus guidance for keeping file processing safe.

---

## 1. Current State

| Component | Status |
|-----------|--------|
| **Waitlist form** | `WaitlistBlock` collects: fullName, email, phone, marketingOptIn. `AuditSection` passes `onSubmit={() => {}}` â€” no persistence. |
| **File processing** | Client-side only: `stubCheckDoc(file)` runs in the browser; files never leave the device. PRD: "Processed client-side only; **no storage** on servers." |
| **API** | No API routes yet. |

---

## 2. Waitlist: DB + API Design

### 2.1 Data to store (per PRD)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| fullName | string | Yes | |
| email | string | Yes | Unique per signup; consider idempotency (same email = update, not duplicate). |
| phone | string | No | Optional. |
| marketingOptIn | boolean | No | Unchecked by default. |
| createdAt | ISO datetime | â€” | For ordering and audit. |

Optional later: source (e.g. `"audit_section"`), IP hash for abuse detection (no need to store raw IP).

### 2.2 The critical decision: deployment determines the database

| Where you deploy | Use this | Why |
|------------------|----------|-----|
| **Vercel / Netlify / serverless** | **Managed DB only:** Turso, Neon (Postgres), or Vercel Postgres | Persistent storage; free tiers available. SQLite is not an option. |
| **VPS (DigitalOcean, Hetzner, EC2, etc.)** | **SQLite** (e.g. `data/regulon.db`) | Persistent disk; one file, easy backup, no external DB. Most secure and simple for single-owner. |

**The trap:** If you deploy to **Vercel, Netlify, or any serverless platform**, the file system is **ephemeral**. A local SQLite file (e.g. `data/regulon.db`) will **disappear** on every deploy or when the runtime goes to sleep. You cannot rely on a local file for persistence.

**The fix:** Use the table above. SQLite = only when you have a persistent server. Turso / Neon / Vercel Postgres = required on Vercel or Netlify.


### 2.3 API shape

- **POST /api/waitlist** (public)
  - Body: `{ fullName, email, phone?, marketingOptIn }` (plus honeypot field; see Section 2.5).
  - **Validation:** Use **Zod** to define a schema (required fields, email format, string max lengths). Validates and sanitizes input in one place.
  - **Honeypot:** Reject bot submissions silently (Section 2.5).
  - Inserts (or upserts by email) into DB.
  - Returns: `201` + `{ ok: true }` or `400` with validation errors. No list of signups, no emails in response.
  - **Rate limit:** e.g. 5 requests per IP per minute to avoid abuse and scraping.

- **GET /api/admin/waitlist** (protected â€” only you)
  - Returns list of signups (for you only). Protected by a secret (see Section 3).
  - Optional: support CSV export via query param or separate route.

No other public routes that expose waitlist data.

### 2.4 Alternative: Google Sheets as "database"

Storing waitlist signups in a **Google Sheet** is a valid MVP shortcut: no DB to run, and you already control access via your Google account.

| Pros | Cons |
|------|------|
| No DB setup or migrations; view/edit in a familiar UI. | Google Sheets API rate limits (e.g. 100 requests/100 sec); not ideal for high volume. |
| Access control = who has access to the Sheet (only you, or share with a teammate). | Requires Google API credentials (service account JSON or OAuth) or a serverless function that appends rows (e.g. via Apps Script web app). |
| Free; easy CSV export; good for dozensâ€“low hundreds of signups. | Slightly less "proper" than a DB if you later want queries, deduplication by email, or integrations. |

**When it's a smart move:** You want the smallest possible MVP, you're fine with a few hundred signups max at first, and you're happy to add a row per submission via Google Sheets API (or an Apps Script endpoint). Then you can switch to a real DB later if needed.

**Implementation sketch:** Create a Sheet with columns (e.g. fullName, email, phone, marketingOptIn, createdAt). In `POST /api/waitlist`, validate the body (Zod + honeypot), then call Google Sheets API to append a row. No GET for the public; you view data by opening the Sheet. Optionally protect the API with a simple secret so only your site can submit.

### 2.5 Anti-spam and validation (security enhancements)

**Honeypot field (recommended):**

- Add a **hidden** input to the form (e.g. `name="website"` or `name="confirm_email"`).
- Hide it with CSS (`display: none` or `position: absolute; left: -9999px`). Real users never see it; bots often fill every field.
- **Server logic:** If that field has **any** value, **silently reject** the submission: return `200 OK` (or `201`) but **do not save** to DB. Stops a large share of automated spam without CAPTCHA.

**Zod for validation:**

- Define a Zod schema for the request body (e.g. `fullName`, `email`, `phone` optional, `marketingOptIn` boolean, max lengths).
- Use it in the API route: `schema.safeParse(body)`. Handles email format, trimming, and type coercion in one place. Prefer Zod over manual `if (email.length > 0)` checks for security and consistency.

---

## 3. Security: â€œAccessible Only for Meâ€

### 3.1 Who is â€œmeâ€?

- Only you (or a small set of admins) should read waitlist data.
- Implement â€œonly meâ€ by **never** exposing list/export in a public endpoint; all read access behind a shared secret only you know.

### 3.2 Protecting the admin endpoint

**Recommended: HTTP Basic Auth in Next.js Middleware**

- You cannot easily send custom headers from a regular browser address bar; with API key only you must use Postman or Terminal every time.
- **Better approach:** Use **HTTP Basic Auth** in **Next.js Middleware** for routes under `/api/admin/*`.
- When you visit `https://yoursite.com/api/admin/waitlist` in your browser, the browser will **natively pop up a username/password prompt**. Enter credentials from env (e.g. `ADMIN_USERNAME`, `ADMIN_PASSWORD`). Much friendlier for you as a human admin.
- Middleware checks the `Authorization` header (Basic base64(user:password)); if missing or invalid, return `401` with `WWW-Authenticate: Basic` so the browser shows the prompt. If valid, let the request through.

**Alternative: API key (for scripts/Postman)**

- **Option A â€” Admin API key (recommended)**  
  - Header: `Authorization: Bearer <ADMIN_API_KEY>` or `X-Admin-Key: <ADMIN_API_KEY>`.  
  - `ADMIN_API_KEY` is a long random string (e.g. 32+ chars) in **env** (e.g. `.env.local`), **never** in code or frontend.  
  - In `GET /api/admin/waitlist`: if the request does not send the valid key, return `401`. No listing without the key.

- **Option B â€” Admin route behind auth (later)**  
  - Add a simple login (e.g. NextAuth with credentials, or a single password page). Only after login can you open a page that calls `GET /api/admin/waitlist`.  
  - Still use a server-side check (session or API key) so the API cannot be called by someone who doesnâ€™t have the secret.

Use Basic Auth for browser access; keep API key for scripts/Postman if needed.

### 3.3 What to do in code

- **Env:** e.g. `ADMIN_USERNAME` and `ADMIN_PASSWORD` for Basic Auth (middleware), and `ADMIN_API_KEY` if you also support key-based access; `DATABASE_URL` if you use Postgres/Turso. Add `.env.local` to `.gitignore`; never commit secrets.
- **Server-only:** All DB access and admin checks run in API routes or server code, never in client bundles.
- **HTTPS only:** In production, use HTTPS so keys and data are not sent in clear text.
- **Minimal response:** Public `POST /api/waitlist` returns only success/error, no PII. Admin endpoint returns data only when the key is valid.

### 3.4 Optional: restrict admin by IP

- In production you can additionally allow `GET /api/admin/waitlist` only from your IP(s). Reduces impact if the key is ever leaked. Not a replacement for a strong key.

---

## 4. File Processing: â€œSo It Does Not Leakâ€

### 4.1 Current design (keep it) — "Zero-Knowledge Processing"

- Files are handled **only in the browser** (`stubCheckDoc(file)` in `lib/stub-check-doc.ts`). They are **never** sent to the server.
- **No leak of file contents** by design: no upload of file body, no server-side storage, no logging of file content.
- **Marketing win:** Explicitly label this architecture as **"Zero-Knowledge Processing"** on your landing page. It's a strong selling point for compliance-focused customers: you literally cannot leak their documents because you never touch them.
- The landing page already states that files are processed locally. Keep this architecture for the free DoC check flow so file processing does not leak.

### 4.2 If you add server-side processing later

If you ever need to process files on the server (e.g. heavier parsing, AI, or compliance checks you canâ€™t do in the browser):

| Measure | Purpose |
|---------|--------|
| **Ephemeral processing** | Read file from request stream; process in memory; **do not** write to disk (or write to temp and delete immediately after). No long-lived storage of uploaded files. |
| **No logging of content** | Do not log file contents or PII. Log only metadata (e.g. â€œupload receivedâ€, â€œprocessing doneâ€) if needed. |
| **Short-lived temp files** | If you must write to disk, use a temp directory with strict permissions and delete the file as soon as processing is done. |
| **Sandbox / isolate** | Run parsing in a restricted environment if possible (e.g. separate process, limited permissions). |
| **HTTPS only** | So file data is not sent in clear text. |

For now, **no change** is required for file processing: keep it client-side so it does not leak by design.

---

## 5. Implementation Order (Baby Steps)

1. **DB + schema**  
   - Choose DB (SQLite or Vercel Postgres / Turso).  
   - Create a single table: e.g. `waitlist_signups` (id, fullName, email, phone, marketingOptIn, createdAt).  
   - Add unique constraint or upsert logic on `email` if you want one row per email.

2. **POST /api/waitlist**  
   - Validate body (required fields, email format, lengths).  
   - Insert (or upsert) into DB.  
   - Return 201 or 400. No PII in response.  
   - Add a simple rate limit (e.g. by IP).

3. **Wire frontend**  
   - In `AuditSection`, replace `onSubmit={() => {}}` with a function that `fetch`es `POST /api/waitlist` with the form data, then shows success/error.

4. **GET /api/admin/waitlist**  
   - Protect `/api/admin/*` with Next.js Middleware using HTTP Basic Auth (`ADMIN_USERNAME`, `ADMIN_PASSWORD`).  
   - In the route: read from DB; return list (e.g. JSON) or CSV for export. Optionally also allow `ADMIN_API_KEY` for script/Postman access.

5. **Docs and ops**  
   - Document in README or internal doc: where `ADMIN_API_KEY` is set, how to call the admin endpoint, how to backup DB (e.g. copy `data/regulon.db` for SQLite).  
   - Optional: small script or page (protected by the same key) to export CSV.

---

## 6. Summary Table

| Concern | Approach |
|---------|----------|
| **Waitlist data only for you** | Admin list/export protected by HTTP Basic Auth (middleware) or `ADMIN_API_KEY`; credentials in env; no public listing. |
| **No leak of signup data** | Public API only accepts POST; never returns list or PII. |
| **File processing does not leak** | Keep client-side only; no server upload/storage. If you add server-side later: ephemeral processing, no content logging, temp files deleted immediately. |
| **Secrets** | All secrets in env; `.env.local` in `.gitignore`; HTTPS in production. |

This plan keeps the waitlist backend minimal and secure, and file processing safe by not sending files to the server. Next step is to pick the DB (SQLite vs managed) and implement Step 1â€“3 (schema, POST API, frontend).
