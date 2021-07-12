import "./Product.scss";
import { useState, useEffect, useContext } from "react";
import shoppingContext from "../../context/shopping.context";
import ProductCategory from "./ProductCategory";
import ProductLayout from "./ProductLayout";
import { Row, Col, Alert } from "react-bootstrap";

const Product = ({ match }) => {
  const [product, setProduct] = useState([]);

  const shoppingData = useContext(shoppingContext);
  const { products, updateProducts } = shoppingData;

  useEffect(() => {
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
