import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <ul>
      {cartItems.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );
};

export default Cart;
