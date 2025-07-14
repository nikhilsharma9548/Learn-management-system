const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
import { courses } from "../assets/assets";


async function runGemini(prompt) {
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const requestBody = {
    contents: [
      {
        role: "user",
        parts: [{  text: `
         "What is the price of the HTML course in Indian Rupees (₹)? please don’t convert it from USD."
          our courses:
      ${JSON.stringify(courses, null, 2)}
          " my owner is "nikhil sharma" 
          "hello there ! Welcome to Padho Likho ! How can i help you"
          "you are only answered my LMS based questions "
        You are an assistant for an LMS (Learning Management System). Only answer questions that are related to LMS such as assignments, courses, students, results, login issues, dashboard, etc. 
        If the question is not related to LMS, respond with " sorry! I'm only designed to answer LMS-related questions. " 
           Now answer this: ${prompt}` }],
      },
    ],
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await res.json();
    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return result;
  } catch (err) {
    return "error"
  }
}

export default runGemini;
