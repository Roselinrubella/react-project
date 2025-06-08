import React, { useContext } from 'react';
import { Mycontext } from '../context/MyContextData';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const { favoriteItems, removeFromFavorites, addToCart } = useContext(Mycontext);

  if (favoriteItems.length === 0) {
    return (
      <Container className="my-5 text-center">
        <h2>Your favorites list is empty.</h2>
        <p>Browse our products and add some to your favorites!</p>
        <Link to="/shop">
          <Button variant="primary">Shop Now</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4">My Favorite Items</h2>
      <Row>
        {favoriteItems.map(item => (
          <Col key={item.Id} lg={3} md={4} sm={6} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={item.Img} alt={item.Desc} style={{ aspectRatio: '1 / 1', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate">{item.Desc}</Card.Title>
                <Card.Text className="text-muted small">{item.Type}</Card.Text>
                <Card.Text as="h5" className="mb-3">{item.Price}</Card.Text>
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    className="w-100 mb-2"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="w-100"
                    onClick={() => removeFromFavorites(item.Id)}
                  >
                    Remove from Favorites
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoritesPage;
