import { useLocation } from "react-router-dom";
import DisplayQuestion from "./DisplayQuestion";
import CodeEditor from "./CodeEditor";

const DSAPlayground = () => {

  const location = useLocation();

  return (
    <div className="w-4/5 mx-auto  flex gap-8 m-10">
      <div className="shadow-lg w-1/2 break-words overflow-hidden">
        <DisplayQuestion question={location.state?.question || "Something Went Wrong"}/>
      </div>
      <div className="shadow-lg w-1/2">
          <CodeEditor/>
      </div>
    </div>
  );
};

export default DSAPlayground;
