import {
  Flex,
  Text,
  Box,
  Heading,
  Spacer,
  Button,
  ButtonGroup,
  Badge,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../Store/UiSlic";

export const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  function cartButtonHandler() {
    dispatch(uiActions.toggle());
  }

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      bg="grey"
      py="2"
      px="5"
    >
      <Box p="2">
        <Heading
          fontSize="3xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          My Basket
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal" onClick={cartButtonHandler}>
          <Text fontSize="xl">Cart</Text>
          <Badge ml="2" fontSize="1em">
            {totalQuantity}
          </Badge>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
