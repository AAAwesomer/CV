import React from 'react'
import ThreeDCard from './3dcard/3dcard'

var createReactClass = require('create-react-class');

var Achievements = createReactClass({
  render() {
    return(
      <div className='achievements'>
        <ThreeDCard />
        <ThreeDCard />
        <ThreeDCard />
        <ThreeDCard />
        <ThreeDCard />
        <ThreeDCard />
      </div>
    )
  }
})

export default Achievements