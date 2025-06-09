import React, { useContext } from 'react';
import { Mycontext } from '../context/MyContextData';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Footerpage from '../Component/HomepageCom/Footerpage'; // Corrected import path

const CheckoutPage = () => {
  const { cartItems } = useContext(Mycontext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Assuming item.Price is a string like "$ 140.00"
      const price = parseFloat(item.Price.replace(/[^0-9.-]+/g, ""));
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  const isCartEmpty = cartItems.length === 0;

  return (
    <>
      <Container className="mt-5 mb-5">
        <h1 className="mb-4 text-center">Checkout</h1>
        <Row>
          {/* Shipping Information */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title as="h3" className="mb-3">Shipping Information</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formPostalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" placeholder="Postal Code" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Country" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Payment Methods & Order Summary */}
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title as="h3" className="mb-3">Payment Methods</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formCardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter card number" />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formExpiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formCVV">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" placeholder="CVV" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
                <hr />
                <p className="text-center text-muted">Or use PayPal (Placeholder)</p>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title as="h3" className="mb-3">Order Summary</Card.Title>
                {isCartEmpty ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div key={item.Id} className="d-flex justify-content-between mb-2">
                        <span>{item.Type} (x{item.quantity})</span>
                        <span>{item.Price}</span>
                      </div>
                    ))}
                    <hr />
                    <div className="d-flex justify-content-between fw-bold">
                      <span>Total:</span>
                      <span>${calculateTotal()}</span>
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button variant="primary" size="lg" disabled={isCartEmpty}>
            Place Order
          </Button>
        </div>
      </Container>
      <Footerpage />
    </>
  );
};

export default CheckoutPage;
