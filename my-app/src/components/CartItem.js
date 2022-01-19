import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledCartItem from "./CartItem.styled";
import { API_URL } from "../utils/constants";
import updateCart from "../actionCreators/updateCart";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const updateQuantity = (by) => {
    if (quantity + by <= 0) {
      let newCart = cart.filter((product) => product.id !== item.id);
      dispatch(updateCart(newCart));
      return;
    } else {
      cart.forEach((product) => {
        if (product.id === item.id) {
          product.quantity += by;
          setQuantity(product.quantity);
        }
      });
      dispatch(updateCart(cart));
    }
  };
  useEffect(() => {}, []);
  return (
    <StyledCartItem>
      <img src={API_URL + item.image} alt={item.name} />
      <div className="item-details">
        <div className="main">
          <div className="title">{item.name}</div>
          <div className="price">{item.price}</div>
          <div>Qt. {quantity}</div>
        </div>
        <div className="quantity">
          <div className="arrow" onClick={() => updateQuantity(-1)}>
            &#10094;
          </div>
          <div className="value">{quantity}</div>
          <div className="arrow" onClick={() => updateQuantity(1)}>
            &#10095;
          </div>
        </div>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
