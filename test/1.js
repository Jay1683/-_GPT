// This code is for v4 of the openai package: npmjs.com/package/openai
const { OpenAI } = require("openai");

const Openaikey = "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";

const openai = new OpenAI({
  apiKey: Openaikey, // defaults to process.env["OPENAI_API_KEY"]
});

const translate = async () => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You will be provided with a sentence, and your task is to translate it into hindi.",
      },
      {
        role: "user",
        content: "माझे नाव जय आहे तुमचे काय आहे?",
      },
    ],
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response.choices[0].message.content);
};

translate();
