import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils" + " Dark mode enabled";

      // setInterval(()=>{
      //   document.title ="Install textUtils now"
      // } ,2000);

      // setInterval(()=>{
      //   document.title ="textUtils is amazing"
      // } ,800);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils" + " Light mode enabled";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          Home="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>} />

            <Route exact
              path="/"
              element={
                <Textform heading="Enter the text to analyse: " mode={mode} showalert={showAlert} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
