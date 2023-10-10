import React, { useState } from "react";

const Footer = () => {
  const [show, setShow] = useState(false);
  function test() {
    if (window.scrollY > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  window.addEventListener("scroll", test);
  return (
    <div className='footer-section'>
      {show && (
        <a href='#top'>
          <div className='go-up'></div>
        </a>
      )}
      <span> &copy; 2022 Corporate. All Right Reserved.</span>
      <div className='teams-icons footer-icons'>
        <a href='https://www.facebook.com/' className='test1'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='https://www.instagram.com/' className='test1'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='https://www.linkedin.com/' className='test1'>
          <i className='fab fa-linkedin-in'></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
