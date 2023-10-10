import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
const About = () => {
  const one = 80;
  const two = 95;
  const three = 60;

  return (
    <section id='about' className='section about-section'>
      <div className='section-title'>
        <h3>about us</h3>
        <div className='subtitle'>learn more about us</div>
      </div>
      <Container fluid>
        <Row>
          <Col sm={6}>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={require("../assets/images/img1.jpg")}
              rounded
            />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              eligendi quos quasi aliquam, porro consequuntur quae autem ullam
              reiciendis doloribus?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad velit
              reprehenderit obcaecati praesentium veritatis facere, temporibus
              ullam tempora optio harum!
            </p>
            <div className='line'>
              <h5>HTML / CSS / JAVASCRIPT</h5>
              <ProgressBar now={one} label={`${one}%`} />
            </div>
            <div className='line'>
              <h5>RESPONSIVE</h5>
              <ProgressBar now={two} label={`${two}%`} />
            </div>
            <div className='line'>
              <h5>PHOTOSHOP</h5>
              <ProgressBar now={three} label={`${three}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
