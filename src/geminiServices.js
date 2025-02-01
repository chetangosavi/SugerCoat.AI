import {GoogleGenerativeAI} from '@google/generative-ai'
const API_KEY = "AIzaSyBxrYSZhTSjhHReWjpysOHMF3Zj6FfikDg";

const genAI = new GoogleGenerativeAI(API_KEY)

export const fetchGeminiResponse = async (prompt) => {
 const model = genAI.getGenerativeModel({model: "gemini-1.5-flash" });
 const promptForGenQuestion = `Generate a random LeetCode-style Data Structures and Algorithms (DSA) question on the topic "${prompt}". Format it like:
    
    Question: <Question text>
    
    Constraints:
    - <Constraints here>
    
    Example Input/Output:
    - <Example case here>
    `;
 const result = await model.generateContent(promptForGenQuestion)
 const response = result.response.text();
 return response;
}