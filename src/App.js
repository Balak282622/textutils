import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";

// import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light'); //if dark mode is enabled or not

  const  toggleMode = ()=>{
    if (mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = ('#0f1d3e')
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = ('white')
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert Alert = "This is alert"/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
