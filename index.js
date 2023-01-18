import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-eeEi8tqcHGBIRKiFA6OueIMm",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
