// here u will have all things u done foe countdown

//import logo from './logo.svg';
import React , {useState, useEffect} from 'react';
import './App.css';
//import Cart from './Component/CartItem';
import CartItem from './Component/CartItem'
import Product from './Component/Product';
import CountdownTimer from './Component/CountdownTimer';


 /*
const App = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
      { id: 1, name: 'Product 1', price: 50, dealDuration: 10 },
      { id: 2, name: 'Product 2', price: 100, dealDuration: 5 }
  ]);

  const addToCart = (product) => {
      setCart([...cart, { ...product, dealEnd: new Date().getTime() + (product.dealDuration * 1000) }]);
  };

  const removeItem = (id) => {
      setCart(cart.filter(item => item.id !== id));
  };

  useEffect(() => {
      const interval = setInterval(() => {
          const currentTime = new Date().getTime();
          setCart(cart.filter(item => currentTime <= item.dealEnd));
      }, 1000);

      return () => clearInterval(interval);
  }, [cart]);

  return (
      <div>
          <h1>Shopping Website</h1>
          <div>
              <h2>Products</h2>
              {products.map(product => (
                  <Product key={product.id} {...product} addToCart={addToCart} />
              ))}
          </div>
          <Cart cartItems={cart} removeItem={removeItem} />
      </div>
  );
};
*/
   
 /*   
  useEffect(() => {
    const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        setCart(cart.filter(item => currentTime <= item.dealEnd));
    }, 1000);

    return () => clearInterval(interval);
}, [cart]); */

const App = () => {
    const [cart, setCart] = useState([]);
    const [products] = useState([
        { id: 1, name: 'Product 1', price: 50, dealDuration: 1200 },
        { id: 2, name: 'Product 2', price: 100, dealDuration: 20 }
    ]);

    const addToCart = (product) => {
        setCart([...cart, 
            { ...product, dealEnd: new Date().getTime() + (product.dealDuration * 1000) }]);
    };

//  const removeItem = (id) => {
       const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div>
            <h1>Shopping Website</h1>
            <div>
                <h2>Products</h2>
                {products.map(product => (
                    <Product key={product.id} 
                    {...product}
                     addToCart={addToCart}
                     removeFromCart={removeFromCart} />
                ))}
            </div>
     {/*    <div>
                <h2>Cart</h2>
                {cart.map(item => (
                    <div key={item.id}>
                        <p>{item.name} - ${item.price}</p>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>

            --add           <Cart cartItems={cart} removeItem={removeItem} />   */}



            <div>
                <h2>Cart</h2>
                {cart.map(item => (
                    <CartItem key={item.id}
                     {...item}
                     // removeItem={removeItem}
                     removeFromCart={removeFromCart} />
                ))}
            </div>
        </div>
    );
};





export default App;