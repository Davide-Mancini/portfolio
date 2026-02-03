import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Progetti from "./component/Progetti";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progetti" element={<Progetti />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
