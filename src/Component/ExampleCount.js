import React, { useState, useEffect } from 'react';


const ExampleCount = ({ durationInSeconds }) => {
    const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            return 0;
          } else {
            return prevTimeLeft - 1;
          }
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, [durationInSeconds]);
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
  
    return (
      <div>
        <h1>Countdown Timer</h1>
        <div>Time Remaining: {formatTime(timeLeft)}</div>
      </div>
    );
  };
  
  export default ExampleCount;