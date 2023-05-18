import './index.css';
import { Link } from 'react-router-dom'
import React from 'react';

const TurnOn = () =>{
    return(
        <>
        <div className="TurnOn">   
        </div>
        <div className='Text'>
            This PC is turned Off <br></br>
            Click here to turn on this PC
        </div>
       
            <Link to="/splash">
            <button className='Button'>
            Turn On</button>
            </Link>
        
        </>
    )
}

export default TurnOn;