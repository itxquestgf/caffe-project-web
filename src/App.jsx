import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drink from "./pages/Drink";
import Food from "./pages/Food";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </Router>
  );
}
