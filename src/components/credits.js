import React from 'react'

import { HomeSVG } from './svgs'

var createReactClass = require('create-react-class');

var Credits = createReactClass({

  goHome(){
    this.props.history.push('/home')
  },
  
  render(){
    return(
      <div className="credits">
        <div className='home-btn-container'>
          <div className='navicon' id="home-btn" onClick={this.goHome}><HomeSVG /></div>
        </div>
        <h1>Credits</h1>
        <ul className='credits-list'>
          <li>Bulb icon made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
          <li>Medal and home icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
          <li>Graduation hat icon made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
          <li>Video and mail icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
        </ul>
      </div>
    )
  }
})

export default Credits