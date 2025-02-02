import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Selection from "./pages/Selection";
import DSAPlayground from "./components/DSAPlayground";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solve" element={<Selection/>} />
        <Route path="/dsa" element={<DSAPlayground/>} />
      </Routes>
    </>
  );
};
export default App;
