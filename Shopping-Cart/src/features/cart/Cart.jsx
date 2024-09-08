import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
  incrementItem,
  decrementItem,
  clearCart,
  removeItem,
} from "./cartSlice";
import "./Cart.css";

const formatPrice = (price) => {
  const number = parseFloat(price);
  if (isNaN(number)) return "0.00";
  return number.toFixed(2);
};
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <div className="head-cart">
        <h2>Items</h2>
        <div className="btn-head-clear">
          <button className="clear-cart-btn" onClick={handleClearCart}>
            CLEAR
          </button>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <>
                <li key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <div className="remove">
                      <div className="cart-item-name">{item.name}</div>
                    </div>

                    <div className="cart-item-price">
                      {formatPrice(item.price)} EGP
                    </div>
                  </div>
                  <div className="cart-action">
                    <div className="remove-btn">
                      <button onClick={() => handleRemoveItem(item.id)}>
                        Remove
                      </button>
                    </div>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleDecrement(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </li>
                <hr />
              </>
            ))}
          </ul>
          <button className="pay-button">PAY {totalPrice} EGP</button>
        </>
      )}
    </div>
  );
};

export default Cart;
