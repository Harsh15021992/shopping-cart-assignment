import "./Home.scss";
import { useEffect, useContext } from "react";
import { Row, Col, Carousel, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import shoppingContext from "../../context/shopping.context";

const Home = () => {
  const history = useHistory();
  const shoppingData = useContext(shoppingContext);
  const { offers, categories, updateOffers, updateCategories } = shoppingData;

  useEffect(() => {
    if (!offers.length) updateOffers();
    if (!categories.length) updateCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="layout-container">
      <Row className="carousel-container bottom-shadow">
        <Col>
          <Carousel interval={1000} className="">
            {offers.map((offer, i) => {
              return (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + offer.bannerImageUrl}
                    alt={"offer + offer.order"}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
      {categories
        .sort((a, b) => a.order - b.order)
        .map((category, index) => {
          return category.order > 0 ? (
            index % 2 !== 0 ? (
              <Row className="category-card align-items-center" key={index}>
                <Col xs={4} md={6} className="category-card-img">
                  <img
                    src={process.env.PUBLIC_URL + category.imageUrl}
                    alt=""
                  />
                </Col>
                <Col xs={8} md={6} className="category-card-detail">
                  <h5>{category.name}</h5>
                  <p>{category.description}</p>
                  <Button
                    variant="primary"
                    className="theme-button explore-right-button"
                    onClick={() => {
                      history.push(`/products/${category.id}`);
                    }}
                  >
                    Explore {category.key}
                  </Button>
                </Col>
              </Row>
            ) : (
              <Row
                className="category-card align-items-center"
                key={category.key}
              >
                <Col xs={8} md={6} className="category-card-detail">
                  <h5>{category.name}</h5>
                  <p>{category.description}</p>
                  <Button
                    variant="primary"
                    className="theme-button explore-left-button"
                    onClick={() => {
                      history.push(`/products/${category.id}`);
                    }}
                  >
                    Explore {category.key}
                  </Button>
                </Col>
                <Col xs={4} md={6} className="category-card-img">
                  <Image src={"./../.." + category.imageUrl} fluid />
                </Col>
              </Row>
            )
          ) : null;
        })}
    </div>
  );
};
export default Home;
