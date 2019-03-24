import React from 'react'

import { HomeSVG } from './svgs'

var createReactClass = require('create-react-class');

var Video = createReactClass({
  getInitialState(){
    return({showNew: true})
  },

  showNew(){
    this.setState({showNew: true})
  },

  showOld(){
    this.setState({showNew: false})
  },

  goHome(){
    this.props.history.push('/home')
  },

  render(){
    var frame = <iframe title="CWideo2017" width="560" height="315" src="https://www.youtube.com/embed/7a1qOxTC5E8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    if (this.state.showNew) {
      frame = <iframe title="CWideo2019" width="560" height="315" src="https://www.youtube.com/embed/OJJVzHpAl08" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    }
    var newWeight = this.state.showNew ? '600' : '400'
    var oldWeight = this.state.showNew ? '400' : '600'

    return(
      <div className='video'>
        <div className='home-btn-container'>
          <div className='navicon' id="home-btn" onClick={this.goHome}><HomeSVG /></div>
        </div>
        <div className='video-wrapper'>
          {frame}
        </div>
        <div className='video-select'>
          <div className='video-btn'>
            <button className='button' onClick={this.showNew} style={{fontWeight: newWeight}}>2019</button>
          </div>
          <div className='video-btn'>
            <button className='button' onClick={this.showOld} style={{fontWeight: oldWeight}}>2017</button>
          </div>
        </div>
      </div>
    )
  }
})

export default Video