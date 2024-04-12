//import React from 'react'
import React , {useState, useEffect} from 'react';
import CartItem from './CartItem';
import CountdownTimer from './CountdownTimer'
import DealTimer from './DealTimer'

/*
const Product = ({ id, name, price, dealDuration, addToCart }) => {
    return (
        <div>
            <h3 >{name}</h3>
            <p>Price: ${price}</p>
            <p>{dealDuration} sec left</p>
            <button onClick={() => addToCart({ id, name, price, dealDuration })}>
                Add to Cart
            </button>
        </div>
    );
};
*/
/* today1
const Product = ({ id, name, price, dealDuration, addToCart }) => {

    const [timeLeft, setTimeLeft] = useState(dealDuration);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                if (prevTimeLeft === 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTimeLeft - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Deal ends in: {formatTime(timeLeft)}</p>
            <button onClick={() => addToCart({ id, name, price, dealDuration })}>
                Add to Cart
            </button>
        </div>
    );
};

*/

/* 

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




const Product = ({ id, name, price, dealDuration, addToCart, removeFromCart }) => {
    const handleTimeout = () => {
        removeFromCart(id);
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



/* Deal time------------------------
const Product = ({ id, name, price, dealDuration, addToCart, removeFromCart }) => {
 //   const [dealEnd, setDealEnd] = useState(0);

    const handleTimeout = () => {
        removeFromCart(id);
        
       
    };
    //    const newDealEnd = Date.now() + dealDuration * 1000;
    //    setDealEnd(newDealEnd);
    //    addToCart({ id, name, price, dealEnd: newDealEnd });
    //};

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>

            <CountdownTimer dealEnd={dealDuration} onTimeout={handleTimeout} />
            <button onClick={() => addToCart({ id, name, price, dealDuration })}>
                Add to Cart
            </button>
        </div>
    );
};
*/



export default Product;