import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { testimonialsData } from "../utils";

const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials-container'>
      {/* <Image fluid src={require("../assets/images/bg-testimonial.jpg")} /> */}
      <Image fluid />
      <div className='section-title'>
        <h3>client testimonials</h3>
        <div className='subtitle'>what client says about us</div>
      </div>
      <Carousel controls={false}>
        {testimonialsData.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <Carousel.Caption>
                <figure className='text-center'>
                  <blockquote className='blockquote'>
                    <p>{item.description}</p>
                  </blockquote>
                  <figcaption className='blockquote-footer'>
                    <cite title='Source Title'>{item.name}</cite>
                    <span>{item.designation}</span>
                  </figcaption>
                </figure>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Testimonials;
// {
//   id: 1,
//   name: "John Wills",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
//   designation: "Manager",
// },
