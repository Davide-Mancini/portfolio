import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Progetti from "./component/Progetti";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/portfolio/#/" element={<Home />} />
          <Route path="/portfolio/#/progetti" element={<Progetti />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
