# Waitlist Backend & Security Plan

**Purpose:** Plan for waitlist signup persistence (DB + API) and security measures so lead data is accessible only to you, plus guidance for keeping file processing safe.

---

## 1. Current State

| Component | Status |
|-----------|--------|
| **Waitlist form** | `WaitlistBlock` collects: fullName, email, phone, marketingOptIn. `AuditSection` passes `onSubmit={() => {}}` — no persistence. |
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
| createdAt | ISO datetime | — | For ordering and audit. |

Optional later: source (e.g. `"audit_section"`), IP hash for abuse detection (no need to store raw IP).

### 2.2 Database options (pick one to start)

| Option | Pros | Cons | Good for |
|--------|------|------|----------|
| **SQLite (e.g. better-sqlite3)** | No external service, file-based, easy backup (copy file). | Single process; not ideal for serverless. | Single-instance / VPS / Node server. |
| **Vercel Postgres / Turso / Neon** | Serverless-friendly, managed. | External dependency, env config. | Vercel or serverless deploy. |
| **PostgreSQL (e.g. Docker + node)** | Full control, scales. | You operate it. | VPS or when you need more control. |

**Recommendation for “only me, minimal leak risk”:** Start with **SQLite** if you run a single Node/Next server (e.g. VPS or `next start` on one machine). One file (e.g. `data/regulon.db`), backup = copy that file, no cloud DB credentials. If you deploy on Vercel or need serverless, use **Vercel Postgres** or **Turso** and restrict access via env (see below).

### 2.3 API shape

- **POST /api/waitlist** (public)
  - Body: `{ fullName, email, phone?, marketingOptIn }`
  - Validates input (required fields, email format, max lengths).
  - Inserts (or upserts by email) into DB.
  - Returns: `201` + `{ ok: true }` or `400` with validation errors. No list of signups, no emails in response.
  - **Rate limit:** e.g. 5 requests per IP per minute to avoid abuse and scraping.

- **GET /api/admin/waitlist** (protected — only you)
  - Returns list of signups (for you only). Protected by a secret (see Section 3).
  - Optional: support CSV export via query param or separate route.

No other public routes that expose waitlist data.

---

## 3. Security: “Accessible Only for Me”

### 3.1 Who is “me”?

- Only you (or a small set of admins) should read waitlist data.
- Implement “only me” by **never** exposing list/export in a public endpoint; all read access behind a shared secret only you know.

### 3.2 Protecting the admin endpoint

- **Option A — Admin API key (recommended)**  
  - Header: `Authorization: Bearer <ADMIN_API_KEY>` or `X-Admin-Key: <ADMIN_API_KEY>`.  
  - `ADMIN_API_KEY` is a long random string (e.g. 32+ chars) in **env** (e.g. `.env.local`), **never** in code or frontend.  
  - In `GET /api/admin/waitlist`: if the request does not send the valid key, return `401`. No listing without the key.

- **Option B — Admin route behind auth (later)**  
  - Add a simple login (e.g. NextAuth with credentials, or a single password page). Only after login can you open a page that calls `GET /api/admin/waitlist`.  
  - Still use a server-side check (session or API key) so the API cannot be called by someone who doesn’t have the secret.

Use **Option A** first: one env var, no login UI. You can call the admin API with curl/Postman or a small script, or later add a password-protected dashboard that uses the same key server-side.

### 3.3 What to do in code

- **Env:** e.g. `ADMIN_API_KEY` (and `DATABASE_URL` if you use Postgres/Turso). Add `.env.local` to `.gitignore`; never commit secrets.
- **Server-only:** All DB access and admin checks run in API routes or server code, never in client bundles.
- **HTTPS only:** In production, use HTTPS so keys and data are not sent in clear text.
- **Minimal response:** Public `POST /api/waitlist` returns only success/error, no PII. Admin endpoint returns data only when the key is valid.

### 3.4 Optional: restrict admin by IP

- In production you can additionally allow `GET /api/admin/waitlist` only from your IP(s). Reduces impact if the key is ever leaked. Not a replacement for a strong key.

---

## 4. File Processing: “So It Does Not Leak”

### 4.1 Current design (keep it)

- Files are handled **only in the browser** (`stubCheckDoc(file)` in `lib/stub-check-doc.ts`). They are **never** sent to the server.
- **No leak of file contents** by design: no upload of file body, no server-side storage, no logging of file content.
- The landing page already states that files are processed locally. Keep this architecture for the “free DoC check” flow so file processing does not leak.

### 4.2 If you add server-side processing later

If you ever need to process files on the server (e.g. heavier parsing, AI, or compliance checks you can’t do in the browser):

| Measure | Purpose |
|---------|--------|
| **Ephemeral processing** | Read file from request stream; process in memory; **do not** write to disk (or write to temp and delete immediately after). No long-lived storage of uploaded files. |
| **No logging of content** | Do not log file contents or PII. Log only metadata (e.g. “upload received”, “processing done”) if needed. |
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
   - Read from DB.  
   - Check `ADMIN_API_KEY` (header or query); if missing/invalid, return 401.  
   - Return list (e.g. JSON) or CSV for export.

5. **Docs and ops**  
   - Document in README or internal doc: where `ADMIN_API_KEY` is set, how to call the admin endpoint, how to backup DB (e.g. copy `data/regulon.db` for SQLite).  
   - Optional: small script or page (protected by the same key) to export CSV.

---

## 6. Summary Table

| Concern | Approach |
|---------|----------|
| **Waitlist data only for you** | Admin list/export only via `ADMIN_API_KEY`; key in env; no public listing. |
| **No leak of signup data** | Public API only accepts POST; never returns list or PII. |
| **File processing does not leak** | Keep client-side only; no server upload/storage. If you add server-side later: ephemeral processing, no content logging, temp files deleted immediately. |
| **Secrets** | All secrets in env; `.env.local` in `.gitignore`; HTTPS in production. |

This plan keeps the waitlist backend minimal and secure, and file processing safe by not sending files to the server. Next step is to pick the DB (SQLite vs managed) and implement Step 1–3 (schema, POST API, frontend).
