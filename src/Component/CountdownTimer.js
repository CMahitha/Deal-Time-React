import React, { useState, useEffect } from 'react';
//import CartItem from './CartItem'
//import Product from './Product';

/*
// DealTimer component
export default function CountdownTimer({ dealEnd, onTimeout })  {
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
*/



//const CountdownTimer = ({ initialTime, onTimeout }) => {
    export default function CountdownTimer({ initialTime, onTimeout }){
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                if (prevTimeLeft === 0) {
                    clearInterval(timer);
                    onTimeout();
                    return 0;
                }
                return prevTimeLeft - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [initialTime, onTimeout]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return <div>{formatTime(timeLeft)}</div>;
};




/* 

// Product component
const Product = ({ id, name, price, dealDuration, addToCart }) => {
    const handleTimeout = () => {
        // Handle timeout, e.g., remove from cart
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <CountdownTimer initialTime={dealDuration} onTimeout={handleTimeout} />
            <button onClick={() => addToCart({ id, name, price, dealDuration })}>
                Add to Cart
            </button>
        </div>
    );  
};
 
*/