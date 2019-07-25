// Entire section is 6 3dcards wth different content.

import React from 'react'

import ThreeDCard from './3dcard/3dcard'
import { HomeSVG } from './svgs'

var createReactClass = require('create-react-class');

var card1 = "Finished IB 2 years early, after just having turned 17, scoring the highest in Math HL and Physics HL out of the year."
var card2 = "During 7th grade in Maunulan Peruskoulu, scored the highest number of points out of both 7th and 8th grades in the Kangaroo Test."
var card3 = "At 18, worked at Affecto/CGI for 7 months total providing customers with practical AI solutions. One example was a facial recognition study we did for RUISROCK."
var card4 = "Played 4 years of competitive football, winning our team numerous trophies throughout my time on the field."
var card5 = "Started 2 companies in high school, one to raise funds for a charitable cause, another to stretch my own pockets."
var card6 = "During my time at Forenom, quickly caught up with their data processes and have been able to work on and improve their demand forecasting and image optimization algorithms."

var Achievements = createReactClass({

  goHome(){
    this.props.history.push('/home')
  },

  render() {
    return(
      <div className='achievements'>
        <div className='home-btn-container'>
          <div className='navicon' id="home-btn" onClick={this.goHome}><HomeSVG /></div>
        </div>
        <div className='achievement-cards'>
          <ThreeDCard text={card1}/>
          <ThreeDCard text={card2}/>
          <ThreeDCard text={card3}/>
          <ThreeDCard text={card4}/>
          <ThreeDCard text={card5}/>
          <ThreeDCard text={card6}/>
        </div>
      </div>
    )
  }
})

export default Achievements