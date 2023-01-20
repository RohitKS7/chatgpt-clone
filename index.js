const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const configuration = new Configuration({
  organization: "org-eeEi8tqcHGBIRKiFA6OueIMm",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// creating a simple express api that calls the function
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

app.post("/", async (req, res) => {
  const { message } = req.body;
  console.log(message, "message");
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 50,
    temperature: 0.5,
    stop: "., \n, \n\n",
  });
  res.json({
    message: response.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
