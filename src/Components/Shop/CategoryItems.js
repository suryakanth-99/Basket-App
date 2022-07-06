import { Flex, Box, Button } from "@chakra-ui/react";
import { cartActions } from "../Store/CartSlice";
import { useDispatch } from "react-redux";

const CategoryItems = (props) => {
  const dispatch = useDispatch();
  function addToCartHandler(name, id) {
    dispatch(cartActions.addItemToCart({ name, id }));
  }

  return (
    <Flex minWidth="max-content" alignItems="center">
      <Box p="2">
        <li style={{ width: "250px" }}>{props.name}</li>
      </Box>
      <Box p="4">
        <Button onClick={addToCartHandler.bind(null, props.name, props.id)}>
          +
        </Button>
      </Box>
    </Flex>
  );
};

export default CategoryItems;
// onClick={deleteItem.bind(null, props.id)}
