/**
 * Teams AI Library bot: handles `@OnboardBot new hire: ...` messages and
 * kicks off the same orchestration the Airtable-webhook trigger uses.
 * See architecture/TECHNICAL_ARCHITECTURE.md § Trigger for why both entry
 * points converge on one orchestrator rather than duplicating logic.
 *
 * This is a skeleton — running it live requires a Teams app registration
 * (MICROSOFT_APP_ID/MICROSOFT_APP_PASSWORD) and Bot Framework channel
 * setup, which isn't needed to build/test the orchestration logic itself.
 * Start with the Airtable-webhook trigger for the demo; wire this up once
 * a live Teams conversational demo is worth the setup time.
 */
import { Application, ActionPlanner, OpenAIModel, PromptManager } from "@microsoft/teams-ai";
import { TurnContext } from "botbuilder";

const model = new OpenAIModel({
  apiKey: process.env.OPENAI_API_KEY ?? "",
  defaultModel: "gpt-4o",
});

const promptManager = new PromptManager({
  promptsFolder: `${__dirname}/prompts`,
});

const planner = new ActionPlanner({
  model,
  prompts: promptManager,
  defaultPrompt: "onboarding",
});

export const app = new Application({
  ai: { planner },
});

/**
 * The agent's core action: parse a natural-language new-hire request into
 * structured fields, create the New Hires record in Airtable, then call
 * the orchestrator function with the new record's ID.
 *
 * This is where "Function vs. Agent" (see PROJECT_CONTEXT.md) actually
 * shows up in code: instead of a hard-coded keyword match, the planner
 * uses the LLM to extract name/role/department/start-date from however
 * the person actually phrased the request.
 */
app.ai.action("createNewHireOnboarding", async (context: TurnContext, state, parameters) => {
  const { fullName, role, department, startDate } = parameters as {
    fullName: string;
    role: string;
    department: string;
    startDate: string;
  };

  // TODO: create the New Hires record in Airtable (reuse lib/airtableClient
  // once a `createNewHire` helper is added there), then POST to the
  // onboardingOrchestrator function with the new record's ID.

  await context.sendActivity(
    `Got it — starting onboarding for ${fullName} (${role}, ${department}), starting ${startDate}. I'll post the checklist here once it's set up.`
  );

  return "onboarding-started";
});
