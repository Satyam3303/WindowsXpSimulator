import React from "react";
import './index.css'
import Original from '../../Assets/SplashPage/OriginalLogo.png'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ShutNoise from '../../Assets/Sounds/Shutdown.mp3'

const TurnOff = () =>{

    const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/turnon'); // Redirect to the '/second' page
    }, 4000); // Redirect after 3 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play().catch(error => {
      // Autoplay was prevented by the browser, handle it here
      console.error('Failed to play audio:', error);
    });
    setIsVisible(false);
  }, []);
  


    return(
        <>
        <div className={`fade-out ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="background"></div>
        <audio ref={audioRef} src={ShutNoise} autoPlay={false} />
        <img src={Original}
          className="OutLogo"
          alt= "Windows XP" />

        <div className='WindowsXp2'>
        Windows xp
         </div>

        <div className='EndUser'>
        windows is shutting down...
        </div>

    <div className='Topps'>
    </div>

    <div className='Bottoms'>
    </div>
    </div>
        </>
    )
}

export default TurnOff;