import "./Product.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
import getProductCategories from "../../api/productCategory.api";
import getProducts from "../../api/products.api";

const Product = ({ match }) => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (!categories.length)
      getProductCategories().then(({ ...res }) => {
        const data = res.data.sort((a, b) => a.order - b.order);
        setCategories(data);
      });
  }, [categories]);

  useEffect(() => {
    if (!productList.length)
      getProducts().then(({ ...res }) => {
        const data = res.data.sort((a, b) => a.order - b.order);
        setProductList(data);
      });
  }, [productList]);

  useEffect(() => {
    if (match.params.productCategory === "all") {
      setProduct((prevProduct) => productList);
    } else {
      setProduct((prevProduct) =>
        productList.filter(
          (prod) => prod.category === match.params.productCategory
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.productCategory]);

  const ProductCategory = () => {
    return (
      <>
        <Card style={{ width: "100%" }} className="xs-hide left-nav">
          <ListGroup variant="flush">
            {categories.map((catList) => {
              return (
                <ListGroup.Item key={catList.key}>
                  <Link to={`/products/${catList.id}`}>{catList.name}</Link>
                </ListGroup.Item>
              );
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
  const ProductLayout = ({
    name,
    imageURL,
    description,
    price,
    stock,
    category,
    sku,
    id,
    imageUrl,
    key,
  }) => {
    return (
      <Col lg={3} md={6} sm={12} className=" pl-0" key={key}>
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
              <Button variant="primary" className="theme-button md-hide">
                Buy Now
              </Button>
              <Button
                variant="primary"
                className="theme-button md-show prod-button-price"
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
    <div className="product-page">
      <Row>
        <Col md={3} className="bg-col-e8e8e8 left-nav-container">
          <ProductCategory />
        </Col>
        <Col lg={9} md={9} sm={12} className="right-nav-container">
          <Row lg={9} md={12} sm={12}>
            {product.length ? (
              product.map((prod, index) => {
                return <ProductLayout {...prod} key={index} />;
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
