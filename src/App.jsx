import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import "./App.scss";

function App() {
  const [show, setShow] = useState(false);
  // const [banners, setBanners] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Router>
      <div>
        <Cart show={show} handleClose={handleClose} />
        <Header handleShow={handleShow} />
        <main>
          <Switch>
            <Route
              exact
              path="/register"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/login">
              <Login />
            </Route>
            <Route
              exact
              path="/products/:productCategory"
              render={(props) => <Product {...props} />}
            />
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
