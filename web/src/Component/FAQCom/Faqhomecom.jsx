import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'


const Faqhomecom = () => {
  return (
  <>
  <br />
  <br />
  <Container>
    <Row>
        <Col lg='6' md='6' sm='12'>
        <div>
             <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='AcoordionItem border border-dark'>
        <Accordion.Header>What is your return policy?</Accordion.Header>
        <Accordion.Body>
        We offer a hassle-free return policy. If you're not satisfied with your purchase, you can
return it within 30 days for a full refund or exchange. Please refer to our Returns &
Exchanges page for detailed instructions.
        </Accordion.Body>
      </Accordion.Item> <br />
      
      <Accordion.Item eventKey="1" className='AcoordionItem border border-dark'>
        <Accordion.Header>How do I frack my order?</Accordion.Header>
        <Accordion.Body>
        Tracking your order is easy! Once your order is shipped, we'll send you a confirmation
email with a tracking number. You can use this number to track your order's status on
our Order Tracking page.
        </Accordion.Body>
      </Accordion.Item>
      <br />

      <Accordion.Item eventKey="2" className='AcoordionItem border border-dark'>
        <Accordion.Header>What payment methods do you accept?</Accordion.Header>
        <Accordion.Body>
       We accept major credit cards (Visa, MasterCard, Amencan Express) and PayPal for
secure and convenient payments.
        </Accordion.Body>
      </Accordion.Item>
      <br />

      <Accordion.Item eventKey="3"className='AcoordionItem border border-dark'>
        <Accordion.Header>Do you offer international shipping?</Accordion.Header>
        <Accordion.Body>
       Yes, we offer international shipping to most countries. Shipping fees and delivery times
may vary based on your location. Please refer to our Shipping Information page for
more details.
        </Accordion.Body>
      </Accordion.Item>
      <br />

       <Accordion.Item eventKey="4"className='AcoordionItem border border-dark'>
        <Accordion.Header>How can I contact your customer support?</Accordion.Header>
        <Accordion.Body>
      You can reach our friendly customer support team through our Contact Us page,
where you'll find a contact form and our email address. We're here to assist you with
any questions or concerns you may have.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
    </Col>

    <Col lg='6' md='6' sm='12'>
        <div>
             <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="5"className='AcoordionItem border border-dark'>
        <Accordion.Header>Do you offer giff wrapping services?</Accordion.Header>
        <Accordion.Body>
       Yes, we offer gift wrapping services for a small additional fee. You can select this
option during the checkout process.
        </Accordion.Body>
      </Accordion.Item>
      <br />
      
      <Accordion.Item eventKey="6"className='AcoordionItem border border-dark'>
        <Accordion.Header>How do I care for my garments?</Accordion.Header>
        <Accordion.Body>
       Care instructions can usually be found on the product's care label or on the product
page itself- We recommend following the provided guidelines to ensure the longevity
and quality of your items.
        </Accordion.Body>
      </Accordion.Item>
      <br />

      <Accordion.Item eventKey="7" className='AcoordionItem border border-dark'>
        <Accordion.Header>Do you offer online ordering and shipping?</Accordion.Header>
        <Accordion.Body>
      Yes, we offer online ordering with shipping options available. Contact us for more
information.
        </Accordion.Body>
      </Accordion.Item>
      <br />

      <Accordion.Item eventKey="8" className='AcoordionItem border border-dark'>
        <Accordion.Header>Can I sign up for exclusive offers and updates?</Accordion.Header>
        <Accordion.Body>
 Absolutely! Join our newsletter to receive exclusive offers, promotions, and updates on
the latest fashion trends. You can sign up at the bottom of our homepage.
        </Accordion.Body>
      </Accordion.Item>
      <br />

       <Accordion.Item eventKey="9" className='AcoordionItem border border-dark'>
        <Accordion.Header>How do I create an account?</Accordion.Header>
        <Accordion.Body>
 Creating an account is easy! Simply click on the "Sign Up" link at the top of the page
and follow the prompts to enter your information- You'll then have access to order
history, wishlists, and faster checkout
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
    </Col>
    </Row>
  </Container>
  </>
  )
}

export default Faqhomecom