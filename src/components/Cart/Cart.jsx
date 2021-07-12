import "./Cart.scss";
import { useContext } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import shoppingContext from "../../context/shopping.context";
import CartItem from "./CartItem";

const Cart = ({ show, handleClose }) => {
  const shoppingData = useContext(shoppingContext);
  const { cart } = shoppingData;

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
