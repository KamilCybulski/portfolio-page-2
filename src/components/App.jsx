import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Nav from './Nav';
import About from './About';
import Work from './Work';
import Contact from './Contact';

injectTapEventPlugin();

const App = () => (
    <div>
      <Nav />
      <About />
      <Work />
      <Contact />
    </div>
);



export default App;
