import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRoute, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
     
      <Navbar />
    </div>
  );
}

export default Navbar;
