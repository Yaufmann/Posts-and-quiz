import React from "react";
import './styles/App.css'
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
   <div>
    <Navbar/>
    <AppRouter/>
   </div>
  )
}
export default App;
