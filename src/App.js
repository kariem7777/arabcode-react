import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import LandingSection from './Components/LandingSection';
import Section2 from './Components/Section2';
import './global.css'
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Footer from './Components/Footer';
function App() {
  const[DarkMode, setDarkMode] = useState(false);

  const ToggleDarkMode = () =>{
      setDarkMode(!DarkMode)
  }
  return (
    <>
      <Navbar DarkMode={DarkMode} ToggleDarkMode={ToggleDarkMode}/>
      <LandingSection DarkMode={DarkMode}></LandingSection>
      <Section2 DarkMode={DarkMode}/>
      <Section3 DarkMode={DarkMode}/>
      <Section4 DarkMode={DarkMode}/>
      <Section5 DarkMode={DarkMode}/>
      <Footer DarkMode={DarkMode}/>
    </>
  );
}

export default App;
