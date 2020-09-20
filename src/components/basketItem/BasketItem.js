import React from "react";
import "./BasketItem.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../stateProvider/StateProvider";

function BasketItem({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="basketItem">
      <img src={image} alt="item_image" className="basketItem__image" />
      <div className="basketItem__info">
        <p className="basketItem__title">{title}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className="basketItem__star" />
              </p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default BasketItem;
