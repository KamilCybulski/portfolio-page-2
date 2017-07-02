import React from 'react';

import face from '../images/face.jpg'

const About = () => (
  <div className="aboutme" id="about">
    <h2>About me</h2>
    <div className="face">
      <img src={face} alt="Just my face yo"/>
    </div>
    <div className="aboutme-description">
      Laborum est deserunt consequat eiusmod commodo aute occaecat labore dolore. Lorem ipsum cillum proident duis laboris proident adipisicing veniam ad qui eu ullamco labore incididunt. Culpa exercitation duis consectetur ex. Irure consequat laborum aliquip reprehenderit. Consectetur sint duis esse sit ipsum fugiat ex eiusmod.
    </div>

    <div className="section-break"></div>
  </div>
)

export default About;