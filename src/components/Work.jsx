import React from 'react';

import placeholder from '../images/placeholder.png';

const description = "Eiusmod laborum aute laboris amet. Magna veniam anim aute labore nostrud elit. Deserunt sit enim proident irure esse anim ad esse nulla. Enim labore nisi aliqua nisi nulla nulla minim officia incididunt est irure elit ullamco. Esse veniam tempor minim esse mollit."

const Thumbnail = ({ desc }) => (
  <div className="thumbnail">
    <div className="project-image">
      <a href="#">
        <img src={placeholder} alt="Just a placeholder yo"/>
      </a>
    </div>
    <div className="project-description">
      {desc}
    </div>
  </div>
)

const Work = () => (
  <div className="work" id="work">

    <h2>My stuff</h2>

    <div className="grid">
      <Thumbnail desc={description} />
      <Thumbnail desc={description} />
      <Thumbnail desc={description} />
      <Thumbnail desc={description} />
      <Thumbnail desc={description} />
      <Thumbnail desc={description} />
    </div>
    
    <div className="section-break"></div>
  </div>
)

export default Work;