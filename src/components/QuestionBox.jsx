import DropDown from "./DropDown";

const QuestionBox = () => {

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
  console.log(values[0].data)
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
          <button>Submit</button>
      </div>
    </div>
  );
};
export default QuestionBox;
