import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap' // Added Button
import {Card, CardBody} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import { Mycontext } from '../../context/MyContextData';


const Shopmenu = () => {
  const { filterproduct, addToCart, addToFavorites, removeFromFavorites, isFavorite } = useContext(Mycontext); // Added favorites context
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <Container className='overflow-y top-5' >
        <br />
        <br />
        <Row>
            <Col lg="3" md="12" sm="12"><p>Showing 1-12 of 47 results</p></Col>
            <Col lg="3" md="12" sm="12">Show 12 15 30</Col>
            <Col lg="3" md="12" sm="12">
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"className='Dropdown-Toggle bg-secondary'>
                 Default sorting
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Default sorting</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sort by popularity</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sort by average rating</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sort by latest</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sort by price: low to high</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sort by Price: high to low</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col lg="3" md="12" sm="12"className='g-2'>
            <div className='d-flex justify-content-end'>
                <i class="bi bi-grid"></i>
                <i class="bi bi-list text-dark"></i>
                </div>
            </Col>
            </Row>
    
            <Row > 
              {filterproduct.filter(value => value.Category === "Shop").map((value, index) =>{
                return(
                  <Col lg="3" md="6" sm="12" className='g-2' key={index}>
                    <Card className='border-0'>
                      <img src={value.Img} className='img-fluid img1shop' alt="img" />
                      <CardBody>
                        <h6>{value.Type}</h6>
                        <p className='text-truncate'>{value.Desc}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <h6>{value.Price}</h6>
                          <i
                            className={isFavorite(value.Id) ? "bi bi-heart-fill text-danger" : "bi bi-heart"}
                            style={{ cursor: 'pointer', fontSize: '1.2rem' }}
                            onClick={() => {
                              if (isFavorite(value.Id)) {
                                removeFromFavorites(value.Id);
                              } else {
                                addToFavorites(value);
                              }
                            }}
                          ></i>
                        </div>
                        <Button variant="primary" className="w-100" onClick={() => addToCart(value)}>Add to Cart</Button>
                      </CardBody>
                    </Card>
                  </Col>
                )
              })}
              </Row>
    </Container>
    
    </>
  )
}

export default Shopmenu