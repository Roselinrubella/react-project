import React, { useContext } from 'react';
import { Mycontext } from '../context/MyContextData';
import { Container, Row, Col, Card, Button, ListGroup, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(Mycontext);

  const calculateSubtotal = (item) => {
    const price = parseFloat(item.Price.replace('$', ''));
    return (price * item.quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.Price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <Container className="my-5 text-center">
        <h2>Your cart is empty.</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop">
          <Button variant="primary">Shop Now</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col lg={8}>
          <h2>Shopping Cart</h2>
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.Id} className="mb-3">
                <Card>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col md={2}>
                        <Image src={item.Img} alt={item.Desc} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <h5>{item.Desc}</h5>
                        <p className="text-muted small">{item.Type}</p>
                      </Col>
                      <Col md={2}>
                        <strong>{item.Price}</strong>
                      </Col>
                      <Col md={3} className="d-flex align-items-center">
                        <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.Id, item.quantity - 1)} disabled={item.quantity <= 1}>-</Button>
                        <Form.Control
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="mx-2 text-center"
                          style={{ width: '50px' }}
                        />
                        <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.Id, item.quantity + 1)}>+</Button>
                      </Col>
                      <Col md={1}>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(item.Id)}>
                          <i className="bi bi-trash"></i>
                        </Button>
                      </Col>
                       <Col md={1} className="text-end">
                        <strong>${calculateSubtotal(item)}</strong>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Cart Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>FREE</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </ListGroup.Item>
              </ListGroup>
              <Button variant="success" className="w-100 mt-3">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
