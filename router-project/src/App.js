import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import DashBoard from './pages/DashBoard';
import { useState } from "react";

function App() {

  const [isLogedIn, setLogedIn] = useState(false);

  return (

    <div className="w-screen h-screen flex flex-col bg-richblack-900 ">
    
      <Navbar isLogedIn={isLogedIn} setLogedIn={setLogedIn} />

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SingUp" element={<SingUp/>}/>
        <Route path="/DashBoard" element={<DashBoard/>}/>

      </Routes>

    </div>
  )
  
}

export default App;
