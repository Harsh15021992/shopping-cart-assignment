import "./Cart.scss";
import { useState } from "react";
import { Container, Modal, Row, Col, Image, Button } from "react-bootstrap";

const Cart = ({ show, handleClose }) => {
  const [cartCount] = useState(0);
  const cartItems = [
    {
      name: "Fresho Kiwi - Green, 3 pcs",
      imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
      description:
        "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
      price: 87,
      stock: 50,
      category: "5b6899953d1a866534f516e2",
      sku: "fnw-kiwi-3",
      id: "5b6c6a7f01a7c38429530883",
    },
    {
      name: "Sandwich Bread - White, Chemical Free, 400 gm",
      imageURL: "/static/images/products/bakery-cakes-dairy/bread.jpg",
      description:
        "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available.",
      price: 32,
      stock: 50,
      category: "5b6899123d1a866534f516de",
      sku: "bcd-bread-400",
      id: "5b6c6d3201a7c38429530888",
    },
    {
      name: "Tata Tea Gold Leaf Tea, 500 gm",
      imageURL: "/static/images/products/beverages/tata-tea.jpg",
      description:
        "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.",
      price: 165,
      stock: 50,
      category: "5b675e5e5936635728f9fc30",
      sku: "bev-tata-tea-500",
      id: "5b6c6f4a01a7c3842953088c",
    },
    {
      name: "TRESemme Shampoo - Keratin Smooth With Argan Oil, 580 ml ",
      imageURL: "/static/images/products/beauty-hygiene/shampoo.jpg",
      description:
        "For the first time, at TRESemme , Our Professional combines luxurious ingredients to give you gorgeously smoother shiny hair every day , infused with keratin protein and lightweight argan oil , our advanced keratin smooth system gently nourishes hair and controls frizz for up to 3 days.",
      price: 410,
      stock: 50,
      category: "5b68994e3d1a866534f516df",
      sku: "bh-tresemme-580",
      id: "5b6c71a101a7c38429530891",
    },
    {
      name: "Baby Dove Baby Bar - Rich Moisture, 50 gm",
      imageURL: "/static/images/products/baby/baby-dove.jpg",
      description:
        "Gentler and more nourishing than any other baby soap bar, Baby Dove Rich Moisture Baby Bar has a hypoallergenic and pH neutral formula thats ophthalmologist, dermatologist and pediatrician tested too.",
      price: 30,
      stock: 50,
      category: "5b6899683d1a866534f516e0",
      sku: "baby-dove-50",
      id: "5b6c758301a7c38429530899",
    },
  ];
  const CartItem = ({ item }) => {
    return (
      <Row md={12} className="cart-item">
        <Col md={3}>
          <Image src={`${process.env.PUBLIC_URL}${item.imageURL}`} thumbnail />
        </Col>
        <Col md={9} className="pl-0">
          <h5>{item.name}</h5>
          <Button variant="primary" className="theme-button">
            -
          </Button>
          <span>1</span>
          <Button variant="primary" className="theme-button">
            +
          </Button>
          <span>x</span>
          <span>Rs.{item.price}</span>
          <span className="total">Total</span>
        </Col>
      </Row>
    );
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          My Cart <span>({cartCount} item)</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          {cartItems.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
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
          <span className="total">Total &gt;</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
