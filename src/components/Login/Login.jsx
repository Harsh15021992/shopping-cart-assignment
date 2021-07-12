import "./Login.scss";
import { Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="customer-authentication-page">
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <h4>Login</h4>
          <p>Get access to your Orders, Wishlist and Recommendations.</p>
        </Col>
        <Col md={4}>
          <Form>
            <div className="input-group">
              <input type="text" required />
              <label>Email</label>
            </div>

            <div className="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>
            <Button
              variant="primary"
              type="button"
              className="theme-button w-100"
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
