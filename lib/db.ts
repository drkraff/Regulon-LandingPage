import { createClient } from "@libsql/client";

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

function getClient() {
  if (url === undefined || url === "" || authToken === undefined || authToken === "") {
    throw new Error(
      "TURSO_DATABASE_URL and TURSO_AUTH_TOKEN must be set. See .env.example."
    );
  }
  return createClient({ url, authToken });
}

const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullName TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  marketingOptIn INTEGER NOT NULL DEFAULT 0,
  createdAt TEXT NOT NULL DEFAULT (datetime('now'))
);
`;

/**
 * Ensures the waitlist table exists. Idempotent; safe to call on every request.
 */
export async function ensureWaitlistTable(): Promise<void> {
  const client = getClient();
  await client.execute(CREATE_TABLE_SQL);
}

/**
 * Returns a Turso client for waitlist operations. Call ensureWaitlistTable once before use.
 */
export function getDbClient() {
  return getClient();
}
