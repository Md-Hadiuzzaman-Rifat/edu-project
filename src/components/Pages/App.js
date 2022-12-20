import React from "react";
import Home from "./Home";
import Signup from "./Signup";
import "../../App.css";
import Login from "./Login";
import Quiz from "./Quiz";
import Result from "./Result";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/quiz" element={<Quiz></Quiz>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/result" element={<Result></Result>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
