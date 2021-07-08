import "./Product.scss";
import { useState, useEffect, useContext } from "react";
import shoppingContext from "../../context/shopping.context";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Alert,
  Button,
  ListGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const Product = ({ match }) => {
  const [product, setProduct] = useState([]);

  const shoppingData = useContext(shoppingContext);
  const {
    products,
    categories,
    cart,
    updateProducts,
    updateCategories,
    updateCart,
  } = shoppingData;

  useEffect(() => {
    if (!categories.length) updateCategories();
    if (!products.length) updateProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      if (match.params.productCategory === "all") {
        setProduct(products);
      } else {
        setProduct(() =>
          products.filter(
            (prod) => prod.category === match.params.productCategory
          )
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.productCategory, products]);

  const ProductCategory = () => {
    return (
      <>
        <Card style={{ width: "100%" }} className="xs-hide left-nav">
          <ListGroup variant="flush">
            {categories.map((catList) => {
              if (catList.order > 0) {
                return (
                  <ListGroup.Item key={catList.key}>
                    <Link to={`/products/${catList.id}`}>{catList.name}</Link>
                  </ListGroup.Item>
                );
              } else {
                return null;
              }
            })}
          </ListGroup>
        </Card>
        <DropdownButton
          id="dropdown-basic-button"
          title="Category Name"
          className="xs-show"
        >
          {categories.map((catList) => {
            return (
              <Dropdown.Item key={catList.key}>
                <Link to={`/products/${catList.id}`}>{catList.name}</Link>
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </>
    );
  };
  const ProductLayout = ({ item }) => {
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

  return (
    <div className="product-page layout-container">
      <Row>
        <Col md={3} sm={12} className="bg-col-e8e8e8 left-nav-container">
          <ProductCategory />
        </Col>
        <Col md={9} sm={12} className="product-section-container">
          <Row lg={9} md={12} sm={12}>
            {product.length ? (
              product.map((prod, index) => {
                return <ProductLayout item={prod} key={index} />;
              })
            ) : (
              <Alert variant="info" className="no-data-alert">
                No Product Found!!!!
              </Alert>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Product;
