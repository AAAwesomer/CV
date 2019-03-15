import React from 'react'
import Deck from './cards/cards'

var createReactClass = require('create-react-class');

var Skills = createReactClass({
  render() {
    return(
      <div className='skills'>
        <Deck />
      </div>
    )
  }
})

export default Skills

