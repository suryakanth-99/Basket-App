import { useSelector } from "react-redux";
import { Header } from "./Components/Shop/Header";
import Body from "./Components/Shop/Body";
import Cart from "./Components/Cart/Cart";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Header />
      {showCart && <Cart />}
      <Body />
    </div>
  );
}

export default App;
