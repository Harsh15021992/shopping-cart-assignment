import { useContext } from "react";
import shoppingContext from "../../context/shopping.context";
import { Row, Col, Image, Button } from "react-bootstrap";

const CartItem = ({ item, index }) => {
  const shoppingData = useContext(shoppingContext);
  const { cart, updateCart } = shoppingData;

  const updateItem = (type) => {
    let newCart = [...cart];
    if (type === "decrease") {
      if (newCart[index].count !== 1) {
        newCart[index].count -= 1;
      } else {
        newCart.splice(index, 1);
      }
    } else if (type === "increase") {
      newCart[index].count += 1;
    }
    updateCart(newCart);
  };

  return (
    <Row className="cart-item">
      <Col xs={3}>
        <Image src={`${process.env.PUBLIC_URL}${item.imageURL}`} thumbnail />
      </Col>
      <Col xs={9} className="pl-0">
        <h5>{item.name}</h5>
        <Button
          variant="primary"
          className="theme-button decrease-count"
          onClick={() => updateItem("decrease")}
        >
          -
        </Button>
        <span>{item.count}</span>
        <Button
          variant="primary"
          className="theme-button increase-count"
          onClick={() => updateItem("increase")}
        >
          +
        </Button>
        <span>x</span>
        <span>Rs.{item.price}</span>
        <span className="total">Rs.{item.count * item.price}</span>
      </Col>
    </Row>
  );
};
export default CartItem;
