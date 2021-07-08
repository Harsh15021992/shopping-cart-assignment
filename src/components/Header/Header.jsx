import "./Header.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import shoppingContext from "../../context/shopping.context";
import logo from "./../../static/images/logo_2x.png";
import cartImg from "./../../static/images/cart.svg";

const Header = ({ handleShow }) => {
  const shoppingData = useContext(shoppingContext);
  const { cart } = shoppingData;
  return (
    <header className="header">
      <div className="layout-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="sabka baazar logo" />
          </Link>
        </div>
        <div className="product-nav-container">
          <Link to="/home">Home</Link>
          <Link to="/products/all">Product</Link>
        </div>
        <div className="cart-nav-wrapper">
          <div className="user-nav-container">
            <Link to="/login">SignIn</Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="cart-container">
            <button className="cart-button" onClick={handleShow}>
              <img src={cartImg} className="cart-icon" alt="" />
              {cart.reduce(
                (accumulator, item) => accumulator + item.count,
                0
              )}{" "}
              items
            </button>
          </div>
        </div>
        <div className="clear-both"></div>
      </div>
    </header>
  );
};
export default Header;
