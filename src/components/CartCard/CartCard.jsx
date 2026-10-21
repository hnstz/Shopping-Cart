import { ShopContext } from "../../app/App";
import "./CartCard.css";
import { useContext } from "react";

export default function CartCard({ id, imgSource, title, quantity, price }) {
  const { deleteItem } = useContext(ShopContext);

  return (
    <div className="cart-card">
      <div className="cart-card-left">
        <div className="cart-card-img-wrapper">
          <img src={imgSource} alt={title} className="cart-card-img" />
        </div>

        <div className="cart-card-info">
          <h3 className="cart-card-title">{title}</h3>
        </div>
      </div>

      <div className="cart-card-dots"></div>

      <div className="cart-card-right">
        
        {price && (
          <span className="cart-card-price">
            ${(price).toFixed(2)}
          </span>
        )}
        <span className="cart-card-qty">× {quantity}</span>
        {(quantity>1)&&(<>
          <span className="cart-card-price">= ${(price).toFixed(2)*quantity}</span>
        </>)}
        <button
          type="button"
          className="cart-card-delete"
          aria-label="Remove item"
          title="remove from cart"
          onClick={() => {
            deleteItem(id);
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
