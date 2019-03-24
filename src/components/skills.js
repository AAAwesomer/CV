// Skills component displays only a card deck created in notecards.js

import React from 'react'
import Deck from './notecards/notecards'
import { HomeSVG } from './svgs'

var createReactClass = require('create-react-class');

var Skills = createReactClass({

  goHome(){
    this.props.history.push('/home')
  },

  render() {
    return(
      <div className='skills'>
        <div className='home-btn-container'>
          <div className='navicon' id="home-btn" onClick={this.goHome}><HomeSVG /></div>
        </div>
        <div className='deck-container'>
          <Deck />
        </div>
      </div>
    )
  }
})

export default Skills

