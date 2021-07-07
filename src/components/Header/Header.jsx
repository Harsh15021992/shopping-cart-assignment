import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "./../../static/images/logo_2x.png";
import cart from "./../../static/images/cart.svg";

const Header = ({ handleShow }) => {
  return (
    <header className="header">
      <div className="layout-container">
        <div className="logo-container">
          <img src={logo} alt="sabka baazar logo" />
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
              <img src={cart} className="cart-icon" alt="" /> 0 items
            </button>
          </div>
        </div>
        <div className="clear-both"></div>
      </div>
    </header>
  );
};
export default Header;
