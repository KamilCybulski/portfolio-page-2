import React from 'react';

const Button = ({ text }) => (
  <a href="#">
  <div className="social-btn">
  {text}
  </div>
  </a>
)


const Contact = () => (
  <div className="contact" id="contact">
    <h2>Get in touch</h2>
    <div className="buttons">
      <Button text="facebook"></Button>
      <Button text="linkedin"></Button>
      <Button text="google"></Button>
    </div>
  </div>
)

export default Contact;