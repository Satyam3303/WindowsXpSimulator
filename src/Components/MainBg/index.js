import './index.css';
import Background from '../../Assets/Background/Wallpaper.jpg';
import Start from '../../Assets/SplashPage/OriginalLogo.png'
import { useState,useEffect } from 'react';
import ShutDown from '../../Assets/TurnOff/ShutDown.png';
import Calculator from '../../Components/Calculator'
import { Link } from 'react-router-dom';
import Minesweeper from '../Minesweeper';

const MainBg = () =>{
    const [isHovered, setIsHovered] = useState(false);

    const [isHovered2, setIsHovered2] = useState(false);
    
    const [isClicked, setIsClicked] = useState(false);

    const [showContent, setShowContent] = useState(false);

    const [showCalculator, setShowCalculator] = useState(false);

    const [showMinesweeper, setShowMinesweeper] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };

    const handleCalculator = () => {
      setShowCalculator(!showCalculator);
    };

    const handleMinesweeper = () => {
      setShowMinesweeper(!showMinesweeper);
    };
    
    

    useEffect(() => {
      // Use setTimeout to delay the rendering
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 2000); // Delay for 2000 milliseconds (2 seconds)
  
      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      const handleMouseEnter2 = () => {
        setIsHovered2(true);
      };
    
      const handleMouseLeave2 = () => {
        setIsHovered2(false);
      };

   return(
    <>

    <img src={Background}
            className="Backgroundz"
            alt= "Windows XP" />
        

    {showContent && 
    
        <div className="container">

        <div className="BottomBar">
        </div>
        <button onClick={handleClick}>
        <img src={Start} onTo
            className="start"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            alt= "Windows XP" />
            </button>

        {isHovered && <div className="overlayStart">Start</div>}
        {isHovered2 && <div className="overlayShutDown">Shut Down</div>}
        {showCalculator && (
         
            <Calculator />
         
        )}

      {showMinesweeper && (
         
         <Minesweeper/>
      
      )}
        {isClicked && <div className="startmenu">
          <ul className='startitems'>
          <li><button className="startbutton" onClick={handleCalculator}>Calculator</button></li>
            <hr></hr>
            <li><button className="startbutton" onClick={handleMinesweeper}>Minesweeper</button></li>
            <hr></hr>
            <li><button className="startbutton">Music Player</button></li>
            <hr></hr>
            <li><button className="startbutton">Gallery</button></li>
            <hr></hr>
            <li><button className="startbutton">Paint</button></li>
            <hr></hr>
            <li><button className="startbutton">Camera</button></li>
          </ul>
          <Link to="/turnoff">
          <button className="shutdown">
          
            
           
          <img src={ShutDown}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className="Backgroundz"
            alt= "Windows XP" />
          </button>
          </Link>
          </div>}
        
        </div>
      }
    </>

  
   )
}

export default MainBg;