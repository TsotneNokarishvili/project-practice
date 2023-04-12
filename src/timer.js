import React from 'react'
import { useState } from 'react';
const CountDownTimer = ({hoursMinSecs,stopper}) => {
    
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    const [isActive, setIsActive] = useState(true);
    function toggle() {
        setIsActive(!isActive);
      }
    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            alert("TimeUP");
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        let timerId=null;
        if(isActive){
             timerId = setInterval(() => tick(), 1000);
        }
        
        if(stopper==true){
            clearInterval(timerId);
         }
         else if(stopper=="reset"){
            setIsActive(true);
            reset();
         }
         
        return () => clearInterval(timerId);
    });


}

export default CountDownTimer;