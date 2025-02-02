import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {generateRandomDSAQuestion} from '../geminiServices.js'
import DropDown from "./DropDown";

const SelectionPanel = () => {
  const values = [
    {
      title: "Topic",
      data: ["Arrays", "Linked List", "Stacks", "Queues", "Trees", "Graphs"],
    },
    {
      title: "Difficulty",
      data: ["Easy", "Medium", "Hard"],
    },
    {
      title: "Languages",
      data: ["C++", "Java", "Python", "JavaScript"],
    },
  ];

  const [selectedValues, setSelectedValues] = useState(["","",""]);
  const navigate = useNavigate()

  const handleSelectedValueOnChnage = (selectedValue, index) => {
    setSelectedValues((prev) => {
      const updatedValues = [...prev];
      updatedValues[index] = selectedValue;
      return updatedValues;
    });
  };

  const isSubmitDisabled = selectedValues.includes("");

  const handleOnClick = async ()=>{
    // console.log(selectedValues)
    const question = await generateRandomDSAQuestion(selectedValues)
    navigate("/dsa",{state:{question,selectedValues}
    })
  }

  return (
    <div className="w-4/5 mx-auto flex flex-col items-center mt-40">
      <h1 className="text-5xl font-bold">Ready to Challenge Yourself?</h1>
      <h3 className="mt-4">Select Topic Difficulty and Language</h3>
      <div className="flex gap-10 mt-4">
        {values.map((item, index) => (
          <DropDown
            title={item.title}
            data={item.data}
            key={index}
            onChange={(selectedValue) =>
              handleSelectedValueOnChnage(selectedValue, index)
            }
          />
        ))}
      </div>
      <button
        onClick={handleOnClick}
        disabled={isSubmitDisabled}
        className={`px-12 py-2 rounded-lg mt-8 text-white shadow-xl text-center ${
          isSubmitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 cursor-pointer"
        }`}
      >
        Submit
      </button>
    </div>
  );
};
export default SelectionPanel;
