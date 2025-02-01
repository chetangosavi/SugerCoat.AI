import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export const fetchGeminiResponse = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = result.response.text();
  return response;
};

export const generateRandomDSAQuestion = async ({ topic, difficulty, language }) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Construct prompt using multiple parameters
    const prompt = `Generate a random LeetCode-style Data Structures and Algorithms (DSA) question on the topic "${topic}".
    The difficulty level should be "${difficulty}" and the programming language should be "${language}". Format it like:
  
    Question: <Question text>
    
    Constraints:
    - <Constraints here>
    
    Example Input/Output:
    - <Example case here>
    `;
  
    const result = await model.generateContent(prompt);
    return result.response.text();
  };
  
