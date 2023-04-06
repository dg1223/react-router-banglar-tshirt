import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Buy Now</button>
    </div>
  );
};

export default TShirt;