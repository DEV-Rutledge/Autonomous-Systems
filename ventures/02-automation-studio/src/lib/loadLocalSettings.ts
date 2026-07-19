/**
 * Loads env vars from local.settings.json for scripts that run outside the
 * Azure Functions runtime (createAirtableSchema.ts, seedAirtable.ts).
 *
 * `func start` reads local.settings.json natively — this file exists
 * because ts-node-run scripts don't go through that runtime at all, and
 * the `dotenv` package only parses KEY=VALUE line files, not JSON, so
 * `dotenv.config({ path: "local.settings.json" })` silently loads nothing
 * despite the file being filled in correctly. This reads the same file's
 * `Values` object directly instead of introducing a second secrets file
 * to keep in sync.
 *
 * No-op if the file doesn't exist (e.g. in a deployed environment, where
 * Application Settings inject env vars a different way).
 */
import * as fs from "fs";
import * as path from "path";

export function loadLocalSettings(): void {
  const settingsPath = path.join(__dirname, "../../local.settings.json");

  if (!fs.existsSync(settingsPath)) {
    return;
  }

  const raw = fs.readFileSync(settingsPath, "utf-8");
  const parsed = JSON.parse(raw) as { Values?: Record<string, string> };

  for (const [key, value] of Object.entries(parsed.Values ?? {})) {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}
