import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-eMWqhAYA1nltzU9N5TTJt2IG",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
