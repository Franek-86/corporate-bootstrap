import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import Image from "react-bootstrap/Image";
import { heroData } from "../utils";
const Hero = () => {
  return (
    <section id='hero' className='hero-section'>
      <Carousel slide={false}>
        {heroData.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <Image src={item.image} />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className='btn btn-primary' href={item.link}>
                  learn more <i className='fa-solid fa-chevron-right'></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Hero;

// }

// <Carousel.Item>
//   <Image fluid src={require("../assets/images/img-hero1.jpg")} />
//   <Carousel.Caption>
//     <h3>test1</h3>
//     <p>test</p>
//     <a className='btn btn-primary'>
//       learn more <i class='fa-solid fa-chevron-right'></i>
//     </a>
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <Image fluid src={require("../assets/images/img-hero1.jpg")} />
//   <Carousel.Caption>
//     <h3>test1</h3>
//     <p>test</p>
//     <a className='btn btn-primary'>
//       learn more <i class='fa-solid fa-chevron-right'></i>
//     </a>
//   </Carousel.Caption>
// </Carousel.Item>
