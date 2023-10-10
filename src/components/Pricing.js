import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { pricingData } from "../utils";
const Pricing = () => {
  return (
    <section id='pricing' className='section pricing-section'>
      <div className='section-title'>
        <h3>pricing &amp; plans</h3>
        <div className='subtitle'>check our pricing &amp; plans</div>
      </div>
      <Container>
        <Row>
          {pricingData.map((item) => {
            return (
              <Col sm={4} key={item.id}>
                <Card>
                  <div className='test2'>
                    <h4>{item.plan}</h4>
                    <span className='h1'>{item.price}</span>
                  </div>
                  {/* <Card.Body> */}
                  <ListGroup variant='flush'>
                    {item.features.map((item, index) => {
                      return (
                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                      );
                    })}
                  </ListGroup>

                  <div className='card-footer'>
                    <a href='#' className='btn btn-primary'>
                      order now
                    </a>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
// {
//   id: 1,
//   plan: "Basic",
//   price: "£49",
//   features: [
//     "Wireframing",
//     "Visual Design",
//     "5 pages",
//     "Free Hosting",
//     "Support & Assistance",
//   ],
//   link: "https://www.google.com",
// },
