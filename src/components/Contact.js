import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <section id='contact' className='contact contact-section'>
      <div className='section-title'>
        <h3>contact us</h3>
        <div className='subtitle'>get connected with us</div>
      </div>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <Form.Control type='text' placeholder='Enter email' />
          </Col>
          <Col sm={4}>
            {" "}
            <Form.Control type='email' placeholder='Enter email' />
          </Col>
          <Col sm={4}>
            {" "}
            <Form.Control type='number' placeholder='Enter email' />
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Form.Control
              placeholder='enter your contact message'
              as='textarea'
              rows={3}
            />
          </Col>
        </Row>
        <div className='test3'>
          <Button>submit</Button>
        </div>
      </Container>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065284.384099193!2d14.685923350000005!3d41.38621129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e8f8f3078d6f%3A0x87254066a3908e1!2sBari%20BA!5e0!3m2!1sit!2sit!4v1695993794230!5m2!1sit!2sit'
        width='100%'
        height='350'
        // style='border:0;'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
      <Container>
        <div className='contact-icons'>
          <div className='envelope'>
            <i className='fa-solid fa-envelope'></i>
            <span>hello@domain.com</span>
          </div>
          <div className='phone'>
            <i className='fa-solid fa-phone'></i>
            <span>000-000-0000</span>
          </div>
          <div className='location'>
            <i className='fa-solid fa-location-dot'></i>
            <span>London, United Kingdom</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
