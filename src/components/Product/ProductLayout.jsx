import { useContext } from "react";
import shoppingContext from "../../context/shopping.context";
import { Col, Card, Button } from "react-bootstrap";

const ProductLayout = ({ item }) => {
  const shoppingData = useContext(shoppingContext);
  const { cart, updateCart } = shoppingData;

  const { name, imageURL, description, price, id } = item;
  const buyItem = () => {
    let index = -1;
    cart.filter((item, i) => {
      if (item.id === id) {
        index = i;
        return 1;
      }
      return 0;
    });
    let newCart = [...cart];
    if (index !== -1) {
      newCart[index]["count"] += 1;
    } else {
      item["count"] = 1;
      newCart.push(item);
    }
    updateCart(newCart);
  };
  return (
    <Col lg={3} md={6} sm={12} className="product-section-wrapper">
      <Card className="brb-1-dashed">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}${imageURL}`}
          className="product-image"
        />
        <Card.Body className="product-desciption">
          <Card.Text>{description}</Card.Text>
          <div>
            <p className="card-price md-hide">MRP Rs.{price}</p>
            <Button
              variant="primary"
              className="theme-button md-hide"
              onClick={buyItem}
            >
              Buy Now
            </Button>
            <Button
              variant="primary"
              className="theme-button md-show prod-button-price"
              onClick={buyItem}
            >
              Buy Now @ Rs.{price}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductLayout;
