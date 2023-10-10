import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Services = () => {
  return (
    <section id='services' className='section service-section'>
      <div className='section-title'>
        <h3>our services</h3>
        <div className='subtitle'>services we provide</div>
      </div>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <div className='service-item'>
              <div className='icon'>
                <i className='fas fa-clone'></i>
              </div>
              <h4>responsive design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt provident, quibusdam voluptas voluptatem cumque rerum
                nihil pariatur enim facilis incidunt!
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className='service-item'>
              <div className='icon'>
                <i className='fas fa-snowflake'></i>
              </div>
              <h4>creative design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita dignissimos esse quo soluta ab totam possimus obcaecati
                molestiae aliquam commodi.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className='service-item'>
              <div className='icon'>
                <i className='fas fa-plug'></i>
              </div>
              <h4>SEO optimezed</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                quod architecto est consequuntur ullam aperiam laudantium optio
                magnam delectus explicabo.
              </p>
            </div>
          </Col>

          <Col sm={4}>
            <div className='service-item'>
              <div className='icon'>
                <i className='fas fa-desktop'></i>
              </div>
              <h4>retina ready</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                quibusdam quo explicabo, voluptatibus dolor dolorem laboriosam
                reiciendis aliquid quas similique.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className='service-item'>
              <div className='icon'>
                <i className='fas fa-trophy'></i>
              </div>
              <h4>power compatibility</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt tempore reprehenderit fugit eligendi corrupti fugiat,
                minus accusantium enim blanditiis. Repellat.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className='service-item'>
              <div className='icon'>
                <i className='fas fa-life-ring'></i>
              </div>
              <h4>customeer support</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                labore, modi illum reprehenderit obcaecati voluptatum aliquam.
                Voluptatem quod architecto voluptate!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
