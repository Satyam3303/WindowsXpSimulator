import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import TurnOn from './Components/TurnOn';
import MainBg from './Components/MainBg';
import SplashPage from './Components/Splash';
import TurnOff from './Components/TurnOff';
import MusicPlayer from './Components/Music Player';


function App() {
  return (
    <>
   
   <Routes>
          <Route path="/" element={<TurnOn />} />
          <Route path="/splash" index element={<SplashPage />} />
          <Route path="/mainbg" index element={<MainBg />} />
          <Route path="/turnoff" index element={<TurnOff />} />
          <Route path="/turnon" index element={<TurnOn />} />
          
      </Routes>
   
    </>
  );
}

export default App;