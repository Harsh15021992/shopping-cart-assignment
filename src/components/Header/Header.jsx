import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../static/images/logo_2x.png";
import cart from "../../static/images/cart.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="sabka baazar logo" />
        </div>
        <div className="product-nav-container">
          <Link to="/home">Home</Link>
          <Link to="/product">Product</Link>
        </div>
        <div className="cart-nav-wrapper">
          <div className="user-nav-container">
            <Link to="/login">SignIn</Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="cart-container">
            <button className="cart-button">
              <img src={cart} className="cart-icon" alt="" /> 0 items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
