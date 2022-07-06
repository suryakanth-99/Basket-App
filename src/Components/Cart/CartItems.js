import { Flex, Box, Button, Badge } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/CartSlice";

const CartItems = (props) => {
  const { id, name, quantity } = props;
  const dispatch = useDispatch();
  const increaseCartItem = () => {
    dispatch(cartActions.addItemToCart({ id, name }));
  };
  const decreaseCartItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <Flex minWidth="max-content" alignItems="center">
      <Box p="2">
        <li style={{ width: "250px" }}>{name}</li>
        <Badge ml="1" colorScheme="green">
          {quantity}
        </Badge>
      </Box>
      <Box p="4">
        <Button ml="1" onClick={increaseCartItem}>
          +
        </Button>
        <Button ml="1" onClick={decreaseCartItem}>
          -
        </Button>
      </Box>
    </Flex>
  );
};

export default CartItems;
