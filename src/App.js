import { useState } from 'react';
import './App.css';
import './CSS/About.css'
//import About from './Components/About';
import Navebar from './Components/Navebar';
import Textform from './Components/Textform';
//import React, { useState } from "react";

function App() {
 const [mode ,setMood] =useState('light');

 const toggleMode =() =>{
  if(mode ==='light'){
    setMood ('dark');
    document.body.style.backgroundColor='grey';
  }
  else{
    setMood ('light');
    document.body.style.backgroundColor='#fff';

  }
 }

  return (
    <>
   <Navebar About="About Us" mode={mode} toggleMode={toggleMode}/>

   
   < Textform heading="Enter the text to Analyze below" mode={mode}/>

    </>
  );
}

export default App;
