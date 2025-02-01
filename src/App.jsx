import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Solve from "./pages/Solve";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solve" element={<Solve/>} />
      </Routes>
    </>
  );
};
export default App;
