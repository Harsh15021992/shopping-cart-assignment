import "./Register.scss";
import { Row, Col, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <div className="layout-container">
      <Row className="customer-authentication-page">
        <Col md={2}></Col>
        <Col md={4}>
          <h4>Signup</h4>
          <p>We do not share your personal details with anyone.</p>
        </Col>
        <Col md={4}>
          <Form>
            <div className="input-group">
              <input type="text" required />
              <label>First Name</label>
            </div>
            <div className="input-group">
              <input type="text" required />
              <label>Last Name</label>
            </div>
            <div className="input-group">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label>Confirm Password</label>
            </div>
            <Button
              variant="primary"
              type="button"
              className="theme-button w-100"
            >
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Register;
