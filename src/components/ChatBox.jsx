import { useState } from "react";
import { fetchGeminiResponse } from "../geminiServices";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  console.log(input);

  const handleOnSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const result = await fetchGeminiResponse(input);
    setResponse(result);
  };

  return (
    <div className="chatbox">
      <div className=" w-4/5 mx-auto mt-10">
        <h1 className="text-center mb-4 font-bold text-xl font-medium">
          Hi there! How can I help you today?
        </h1>
        <form onSubmit={handleOnSubmit} className="flex gap-4 justify-center">
          <input
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded-lg w-80"
            type="text"
            placeholder="Enter Your Prompt.."
          />
          <button
            type="submit"
            className="bg-blue-500 rounded-lg py-2 px-6 text-white"
          >
            Submit
          </button>
        </form>

        <div className="flex justify-center mt-6">
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
};
export default ChatBox;
