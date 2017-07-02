import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Nav from './Nav';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Bottom from './Bottom';

injectTapEventPlugin();

const App = () => (
    <div>
      <Nav />
      <About />
      <Work />
      <Contact />
      <Bottom />
    </div>
);



export default App;
