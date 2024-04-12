import React, { useState, useEffect } from 'react';

// DealTimer component
const DealTimer = ({ dealEnd, onTimeout }) => {
    const [timeLeft, setTimeLeft] = useState(Math.max(0, Math.ceil((dealEnd - Date.now()) / 1000)));

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = Math.max(0, Math.ceil((dealEnd - Date.now()) / 1000));
            setTimeLeft(newTimeLeft);
            if (newTimeLeft === 0) {
                clearInterval(timer);
                onTimeout();
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [dealEnd, onTimeout]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return <div>{formatTime(timeLeft)}</div>;
};

export default DealTimer;
