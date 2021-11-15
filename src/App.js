import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "../node_modules/react-router-dom";


// import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light'); //if dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1250);
  }

  const  toggleMode = ()=>{
    if (mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = ('#0f1d3e')
      showAlert('Dark mode is enabled','success')
      // document.title = 'Text Utils - Dark Mode'
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = ('white')
      showAlert('light mode is enabled','success')
      // document.title = 'Text Utils - Light Mode'
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title = "TextUtils" aboutText = 'About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">        
      <Switch>
          <Route exact path="/about" >
            <About />
          </Route>

          <Route exact path="/" >
          <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode} />
            
          </Route>
        </Switch>

      </div>
      </Router>
    </>
  );
}

export default App;
