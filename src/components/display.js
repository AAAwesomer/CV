import React from 'react';

import Header from './header'

import NavIcons from './navicons'
import Education from './education';

var createReactClass = require('create-react-class');

var Display = createReactClass({
  render(){
    switch(window.location.pathname) {
      case "/":
        return(
          <Header />
        )

      case "/education":
        return(
          <NavIcons type='sidebar' />
        )

      case "/skills":
        return(
          <NavIcons type='sidebar' />
        )

      case "/achievements":
        return(
          <NavIcons type='sidebar' />
        )

      case "/video": 
        return(
          <NavIcons type='sidebar' />
        )

      default:
        break;
    }
  }
})

export default Display;