import React from 'react';
import './index.css';
import Original from '../../Assets/SplashPage/OriginalLogo.png'
import Kakashi from '../../Assets/SplashPage/Kakashi.jpg';
import { useState, useEffect, useRef } from 'react';
import StartNoise from '../../Assets/Sounds/Startup.mp3'

import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/mainbg'); // Redirect to the '/second' page
    }, 4000); // Redirect after 3 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);
  
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play().catch(error => {
      // Autoplay was prevented by the browser, handle it here
      console.error('Failed to play audio:', error);
    });
    setIsVisible(true);
  }, []);
  
  return (

    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>

  <div>
  <audio ref={audioRef} src={StartNoise} autoPlay={false} />
    </div>
  
    
    <div className="splash-page">

    <img src={Original}
          className="Logo"
          alt= "Windows XP" />

    <img src={Kakashi}
          className="Account"
          alt= "Windows XP" />

    <div className='User'>
      Kakashi3303
    </div>

    <div className='WindowsXp'>
     Windows xp
    </div>

    <div className='WelcomeUser'>
      Welcome User
    </div>

    <div className='Line'>
    </div>

    <div className='Topper'>
    </div>

    <div className='Bottomer'>
    </div>

    </div>
    </div>
  );
};

export default SplashPage;
