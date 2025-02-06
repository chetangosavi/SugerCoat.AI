import { useLocation } from "react-router-dom";
import DisplayQuestion from "./DisplayQuestion";

const DSAPlayground = () => {

  const location = useLocation();

  return (
    <div className="w-4/5 mx-auto h-screen flex flex-col items-center mt-20">
      {/* Div for displaying Question box */}
      <div>
        <DisplayQuestion question={location.state?.question || "Something Went Wrong"}/>
      </div>
      {/* Div for CodeEditor */}
      <div>

      </div>
    </div>
  );
};

export default DSAPlayground;
