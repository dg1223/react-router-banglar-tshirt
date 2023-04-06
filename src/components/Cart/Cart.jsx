import React from "react";
import "./Cart.css";
import { yellow } from "tailwindcss/colors";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  } else {
    message = (
      <div>
        <h3>Borolokxxx</h3>
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order summary: {cart.length}
      </h2>
      <p className={`bold bordered ${cart.length === 3 ? "yellow" : "purple"}`}>
        Something
      </p>
      {cart.length > 2 ? (
        <span className="purple">Aro kino</span>
      ) : (
        <span>fokira</span>
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double bonanza!!!</p>}
      {cart.length === 3 || <h3>Tinta to hoilo na!!</h3>}
    </div>
  );
};

export default Cart;

/**
 * Conditional rendering
 * 1. if-else
 * 2. ternary -> condition ? 'if true' : 'if false'
 * 3. logical AND &&: if the condition is TRUE, then the next thing will be displayed
 * 4. logical OR ||: if the condition is FALSE, then the next thing will be displayed
 */

/**
 * Conditional CSS class
 * 1. use ternary
 * 2. ternary inside template string
 */
