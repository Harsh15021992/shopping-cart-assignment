import "./Cart.scss";
import { useContext } from "react";
import { Container, Modal, Row, Col, Image, Button } from "react-bootstrap";
import shoppingContext from "../../context/shopping.context";

const Cart = ({ show, handleClose }) => {
  const shoppingData = useContext(shoppingContext);
  const { cart, updateCart } = shoppingData;

  const CartItem = ({ item, index }) => {
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

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          My Cart{" "}
          <span>
            ({cart.reduce((accumulator, item) => accumulator + item.count, 0)}{" "}
            item)
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={!cart.length && "noItem-cart-modal-body"}>
        <Container fluid>
          {cart.length ? (
            cart.map((item, index) => {
              return <CartItem item={item} index={index} key={index} />;
            })
          ) : (
            <div className="empty-cart">
              <p>
                <strong>No items in your cart</strong>
              </p>
              <p>Your favourite items are just a click away</p>
            </div>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <p>Promocode can be applied on payment page</p>
        <Button
          variant="primary"
          className="theme-button w-100"
          onClick={handleClose}
        >
          <span className="btn-text">Proceed to checkout</span>
          <span className="total">
            Rs.
            {cart.reduce(
              (accumulator, item) => accumulator + item.count * item.price,
              0
            )}{" "}
            &gt;
          </span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
