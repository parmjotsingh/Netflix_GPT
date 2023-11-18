import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
  // defaults to process.env["OPENAI_API_KEY"]
});
