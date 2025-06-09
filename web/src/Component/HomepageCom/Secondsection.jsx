import React, { useContext } from 'react' // Added useContext
import { Link } from 'react-router-dom'; // Added Link
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import { Product } from '../../assets/assets'
import { Mycontext } from '../../context/MyContextData'; // Added Mycontext
import Container from 'react-bootstrap/esm/Container'



function Secondsection() {
  const { addToCart, addToFavorites, isFavorite } = useContext(Mycontext); // Added isFavorite

  return (
    <>
      <div className='d-flex justify-content-center align-items-center fs-1'>
        <div>You Are in </div>
        <div>
          <NavDropdown title="New Arrival" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">New Arrival</NavDropdown.Item>
            <NavDropdown.Item href="#">Best Seller</NavDropdown.Item>
            <NavDropdown.Item href="#">Trending</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      <br></br>
<div>
  <Container data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <Row key="index">
      {Product.filter((value)=>value.Category==="New Arrivals").map((value, index) => {
        return (
          <Col lg="3" md="6" sm="12" className='g-2' key={index}>
                <Card className='border-0'>
                  <div className='image-container'>
                  <Link to={`/product/${value.Id}`}>
                    <img src={value.Img} className='img-fluid' alt="img" />
                  </Link>
                  <div className='hover-icons'>
                    <Row className='g-3'>
                  <Col lg='12'><Link to={`/product/${value.Id}`}><i className="bi bi-search"></i></Link></Col>
                  <Col lg='12'> <button onClick={() => addToFavorites(value)} className='bg-transparent border-0'><i className={`bi ${isFavorite(value.Id) ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i></button></Col>
                  <Col lg='12'><button onClick={() => addToCart(value)} className='bg-transparent border-0'><i className="bi bi-cart"></i></button></Col>
                  </Row>
                  </div>
                  </div>
                  <CardBody>
                    <Link to={`/product/${value.Id}`} className='text-decoration-none text-dark'>
                      <h5>{value.Type}</h5>
                    </Link>
                    <p className='text-truncate'>{value.Desc}</p>
                    <h5>{value.Price}</h5>
                  </CardBody>
                </Card>
              </Col>   
        )
      })}
       </Row>
       </Container>
</div>

<br></br>
<br></br>
    </>

  )
}
export default Secondsection
