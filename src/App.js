
import React from 'react';
import { useState } from 'react';
import './App.css';
import Mainbody from './components/Mainbody';
import Navbar from './components/Navbar';;

function App() {
  
  //! menu slide controler 
  const [menu, setMenu] = useState('none');

  const showMenu = () => {
    if(menu === 'none'){
      setMenu('block');
    }else{
      setMenu('none');
    }
  }

  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('dark mode');

  const changeMode = () => {
    if(mode==='light'){
      setMode('dark');
      setModeText('light mode');
    }else{
      setMode('light');
      setModeText('dark mode');
    }
  }

  return (
  <div>
  <Navbar showMenu={showMenu} mode={mode}/>
  <Mainbody menu={menu} changeMode={changeMode} mode={mode} modeText={modeText}/>
  </div>
  )
}

export default App;