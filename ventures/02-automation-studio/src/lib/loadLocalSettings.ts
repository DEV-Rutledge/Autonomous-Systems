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
 *
 * Resolved from process.cwd(), not __dirname — these scripts are always
 * invoked via `npm run ...` from the src/ directory (where
 * local.settings.json lives, alongside package.json), and __dirname-based
 * relative paths break the moment this runs from compiled dist/ output
 * instead of source (different folder depth) — see the bug this caused
 * on first use, ../../ instead of ../ from src/lib/.
 */
import * as fs from "fs";
import * as path from "path";

export function loadLocalSettings(): void {
  const settingsPath = path.join(process.cwd(), "local.settings.json");

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
