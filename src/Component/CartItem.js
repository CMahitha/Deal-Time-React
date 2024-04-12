import React from 'react';
import CountdownTimer from './CountdownTimer'
import DealTimer from './DealTimer'

/* 

//const CartItem = ({ id, name, price, dealDuration, removeItem }) => {
    export default function CartItem({ id, name, price, dealDuration, removeItem }){
    const handleTimeout = () => {
        // Handle timeout, e.g., remove from cart
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <CountdownTimer initialTime={dealDuration} onTimeout={handleTimeout} />
            <button onClick={() => removeItem(id)}>Remove</button>
        </div>
    );
};
 
*/



export default function CartItem({ id, name, price, dealDuration, timer, removeFromCart }) {
    const handleTimeout = () => {
        removeFromCart(id);
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Offer ends soon</p>
           {/* <CountdownTimer initialTime={dealDuration} onTimeout={handleTimeout} />    */  }     
          
        {/*    <Countdo
        wnTimer timeLeft={timer} />   */  }   
     <button onClick={() => removeFromCart(id)}>Remove</button> 
  
        </div>
    );
};



/*
export default function CartItem({ id, name, price, removeFromCart,dealDuration, timer, dealEnd }) {
    const handleTimeout = () => {
        removeFromCart(id);
    };
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
           /* {dealEnd > 0 ? <DealTimer dealEnd={dealEnd} onTimeout={() => removeFromCart(id)} /> : null}  */
/*to delete           <CountdownTimer dealEnd={dealDuration} onTimeout={handleTimeout} />
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

*/


