import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import { mix } from '../../../assets/assets'
import AboutHomecom from '../AboutHomecom'
import AboutNavcom from '../AboutNavcom'




const Aboutfirst = () => {
  return (
    <>
    <br />
    <AboutHomecom />
    <AboutNavcom />
    <Container>
        <Row className='align-items-center g-5'>
            <Col lg="6" md='6' sm='12'>
                <img src={mix.abt} alt="img" className='img-fluid' />
            </Col>
            <Col lg="6" md='6' sm='12'p='5'>
            <h1 className='aboutfirsth1'>Unveiling Your Unique <br />
                Fashion Journey</h1><br />
                <p className='aboutfirstp '>Welcome to Mixtas Store, where fashion meets individuality,
                   and style is more than just clothing — it's a statement. Our
                    passion for fashion drives us to curate a collection that
                    celebrates diversity, embraces trends, and empowers you to
                    express yourself through clothing.</p>
            
            </Col>
        </Row>
        <br />
        
    </Container>
    </>
  )
}

export default Aboutfirst