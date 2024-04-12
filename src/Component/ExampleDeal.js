import React, { useState, useEffect } from 'react';

const ExampleDeal = () => {
    const dealEndDate = new Date('2024-04-30T23:59:59');
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
    function calculateTimeRemaining() {
      const now = new Date();
      const difference = dealEndDate - now;
  
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div>
        <h1>Deal Timer</h1>
        <div>
          <span>{timeRemaining.days}</span> days {' '}
          <span>{timeRemaining.hours}</span> hours {' '}
          <span>{timeRemaining.minutes}</span> minutes {' '}
          <span>{timeRemaining.seconds}</span> seconds
        </div>
      </div>
    );
  };

  export default ExampleDeal;