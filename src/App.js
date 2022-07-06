import { useSelector } from "react-redux";
import { Header } from "./Components/Shop/Header";
import Body from "./Components/Shop/Body";
import Cart from "./Components/Cart/Cart";
import { Box, Center } from "@chakra-ui/react";
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Header />
      {showCart && (
        <div>
          <h1 fontSize="xl" fontWeight="bold">
            My Cart
          </h1>

          <Cart />
        </div>
      )}
      <Body />
    </div>
  );
}

export default App;
