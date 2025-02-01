import DropDown from "./DropDown";

const SelectionPanel  = () => {

  const values = [
    {
      "title":"Topic",
      "data" :["Arrays", "Linked List", "Stacks", "Queues", "Trees", "Graphs"]
    },
    {
      "title":"Difficulty",
      "data" :["Easy", "Medium","Hard"]
    },
    {
      "title":"Languages",
      "data" :["C++", "Java", "Python", "JavaScript"]
    },
  ]

  return (
    <div className="w-4/5 mx-auto h-screen flex flex-col items-center mt-40">
      <h1 className="text-5xl font-bold">Ready to Challenge Yourself?</h1>
      <h3 className="mt-4">Select Topic Difficulty and Language</h3>
      <div className="flex gap-10 mt-4">
        {
          values.map((item,index)=>(
            <DropDown title={item.title} data={item.data} key={index}/>
          ))
        }
      </div>
      <button className="bg-green-500 px-12 py-2 rounded-lg mt-8 text-white shadow-xl cursor-pointer text-center">Submit</button>
    </div>
  );
};
export default SelectionPanel ;
