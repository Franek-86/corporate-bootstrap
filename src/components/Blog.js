import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { blogData } from "../utils";
const Blog = () => {
  return (
    <section id='blog' className='section blog-section'>
      <div className='section-title'>
        <h3>latest from blog</h3>
        <div className='subtitle'>get our latest news from blog</div>
      </div>
      <Container fluid>
        <Row>
          {blogData.map((item) => {
            return (
              <Col sm={4} key={item.id}>
                <Card>
                  <Card.Img variant='top' src={item.image} />
                  <Card.Body>
                    <time>{item.time}</time>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant='primary'>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
