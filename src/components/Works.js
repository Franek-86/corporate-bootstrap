import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { worksData } from "../utils";
import Pagination from "react-bootstrap/Pagination";

const Works = () => {
  let active = 5;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <section id='works' className='section work-section'>
      <div className='section-title'>
        <h3>our sworks</h3>
        <div className='subtitle'>our awsome works</div>
      </div>
      <Container fluid>
        <Row>
          {worksData.map((item) => {
            return (
              <Col key={item.id} sm={4}>
                <a href={item.link}>
                  <div className='img-container'>
                    <Image fluid src={item.image} />
                    <div className='img-text'>
                      <h4>{item.title}</h4>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                </a>
              </Col>
            );
          })}
        </Row>

        <Pagination>{items}</Pagination>
      </Container>
    </section>
  );
};

export default Works;
