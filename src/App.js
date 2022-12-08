import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alerts from "./components/Alert";
import { useState } from "react";



function App() {
  let [name, setname] = useState("")
  const [alert , setAlert] = useState(null);
  
  const handleName = (Name) =>{
    setname(Name);
  }
  const showAlert = (message , type) =>{
    setAlert({
       message:message,
       type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
}
  return (
    <>
      <NoteState>
        <Router>
          <Navbar name = {name} showAlert = {showAlert}/>
          <Alerts alert = {alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element = {<Home showAlert = {showAlert}/>} />
              <Route exact path="/about" element = {<About/>} />
              <Route exact path="/login" element = {<Login  handleName = {handleName} showAlert = {showAlert}/>} />
              <Route exact path="/signup" element = {<Signup showAlert = {showAlert}/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
