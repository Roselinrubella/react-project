import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { mix } from '../../assets/assets';
import { useContext } from 'react';
import { Mycontext } from '../../context/MyContextData';

const Getintouchcom = () => {
  const { onSubmit, result } = useContext(Mycontext);

  return (
    <>
      <br />
      <br />
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <h1>Get In Touch</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12">
            <Form className="form-control" onSubmit={onSubmit}>
              <Row>
                <Col lg="12" md="6" sm="12">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                  />
                  <br />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                  />
                  <br />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message (optional)"
                    className="form-control"
                  ></textarea>
                  <br />
                  <input
                    type="submit"
                    className="btn btn-dark"
                    value="Send Message"
                  />
                  <br />
                  {result && <span className="submit-message">{result}</span>}
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg="6" md="6" sm="12">
            <div>
              <img src={mix.map} alt="map location" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Getintouchcom;