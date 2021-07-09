import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import ShoppingProvider from "./context/shopping.state";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const Home = lazy(() => import("./components/Home/Home"));
const Product = lazy(() => import("./components/Product/Product"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Register = lazy(() => import("./components/Register/Register"));
const Login = lazy(() => import("./components/Login/Login"));

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <ShoppingProvider>
      <Router>
        <div>
          <Suspense fallback={<Loader />}>
            <Cart show={show} handleClose={handleClose} />
            <Header handleShow={handleShow} />
            <main>
              <Switch>
                <Route exact path="/register">
                  <Register />
                </Route>
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
          </Suspense>
        </div>
      </Router>
    </ShoppingProvider>
  );
}

export default App;
