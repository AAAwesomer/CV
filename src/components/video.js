import React from 'react'

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

  render(){
    var frame = <iframe title="CWideo2017" width="560" height="315" src="https://www.youtube.com/embed/7a1qOxTC5E8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    if (this.state.showNew) {
      frame = <iframe title="CWideo2019" width="560" height="315" src="https://www.youtube.com/embed/OJJVzHpAl08" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    }

    return(
      <div className='video'>
        <div className='video-wrapper'>
          {frame}
        </div>
        <div className='video-select'>
          <div className='video-btn'>
            <button className='button' onClick={this.showNew}>2019</button>
          </div>
          <div className='video-btn'>
            <button className='button' onClick={this.showOld}>2017</button>
          </div>
        </div>
      </div>
    )
  }
})

export default Video