import React from 'react';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';

import NavIcons from './navicons'
import Footer from './footer'

var createReactClass = require('create-react-class');

var Header = createReactClass({

  render() {

    return (
      <header className="App-header">

        <NavIcons />

        <Footer />

      </header>
    );
  }
})

export default Header;