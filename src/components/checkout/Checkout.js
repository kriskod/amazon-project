import React from "react";
import { useStateValue } from "../../stateProvider/StateProvider";
import BasketItem from "../basketItem/BasketItem";
import Subtotal from "../subtotal/Subtotal";
import FlipMove from "react-flip-move";
import "./Checkout.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {user?.email.split("@")[0]}</h3>
          <h2 className="checkout__title">Your shopping cart</h2>
          {basket.map((item) => (
            <BasketItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
