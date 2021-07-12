import { useEffect, useContext } from "react";
import shoppingContext from "../../context/shopping.context";
import { Card, ListGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const shoppingData = useContext(shoppingContext);
  const { categories, updateCategories } = shoppingData;

  useEffect(() => {
    if (!categories.length) updateCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default ProductCategory;
