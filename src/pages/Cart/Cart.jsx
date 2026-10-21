import { useContext } from "react";
import { ShopContext } from "../../app/App";
import CartCard from "../../components/CartCard/CartCard";

export default function Cart() {
  const { items } = useContext(ShopContext);
  let itemsAmount = 0;
  let totalPrice = 0;
  const cart = [];

  items.forEach((val, key) => {
    itemsAmount += val.quantity;
    totalPrice += (val.price || 0) * val.quantity;

    cart.push(
      <CartCard
        key={key}
        id={val.id}
        imgSource={val.imgSource}
        title={val.title}
        price={val.price}
        quantity={val.quantity}
      />,
    );
  });

  return (
    <>
      <div className="cart-page">
        <div className="cart-summary-header">
          <div className="cart-summary-stats">
            <div className="cart-total-pill">
              Total items: <span>{itemsAmount}</span>
            </div>
            <div className="cart-total-price-pill">
              Total price: <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {cart}
      </div>
    </>
  );
}