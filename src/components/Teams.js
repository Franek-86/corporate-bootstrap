import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { teamsData } from "../utils";
const Teams = () => {
  return (
    <section id='teams' className='section teams-section'>
      <div className='section-title'>
        <h3>our teams</h3>
        <div className='subtitle'>some of our experts</div>
      </div>
      <Container>
        <Row>
          {teamsData.map((item) => {
            return (
              <Col sm={4} key={item.id}>
                <div className='teams-item'>
                  <div className='teams-img'>
                    <div className='teams-icons'>
                      <a className='test1'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                      <a className='test1'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a className='test1'>
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </div>
                    <Image fluid src={item.image} />
                  </div>

                  <h4>{item.name}</h4>
                  <span>{item.designation}</span>
                  <p>{item.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;
