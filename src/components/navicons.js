import React from 'react';
import { withRouter } from 'react-router-dom'
import { SchoolSVG, GearSVG, VideoSVG, AwardSVG } from './svgs.js'

import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

var createReactClass = require('create-react-class');

var NavIcons = createReactClass({

  getInitialState(){
    return({pulser: [0, 0, 0, 0]})
  },

  componentDidMount(){
    this.pulseTimeouts = []
    this.pulseInterval = setInterval(this.handlePulse, 8000)
  },

  handlePulse(){
    this.pulse(0)
    this.pulseTimeouts.push(setTimeout(() => {this.pulse(1)}, 400))
    this.pulseTimeouts.push(setTimeout(() => {this.pulse(2)}, 800))
    this.pulseTimeouts.push(setTimeout(() => {this.pulse(3)}, 1200))
  },

  pulse(idx){
    var p = this.state.pulser.slice()
    p[idx] += 1
    this.setState({pulser: p})
  },

  componentWillUnmount(){
    clearInterval(this.pulseInterval)
    this.pulseTimeouts.forEach(t => {
      clearTimeout(t)
    });
  },

  go(to){
    this.props.redirect(to)
  },

  render() {
    return (
      <nav>
        <Fade big top when={this.props.show_icons} duration={1000}>
          <Pulse spy={this.state.pulser[0]}>
            <div onClick={this.go.bind(this, '/skills')}><GearSVG /></div>
          </Pulse>
        </Fade>

        <Fade big left when={this.props.show_icons} duration={1000}> 
          <Pulse spy={this.state.pulser[1]}>
            <div onClick={this.go.bind(this, '/achievements')}><AwardSVG /></div>
          </Pulse>
        </Fade>

        <Fade big right when={this.props.show_icons} duration={1000}>
          <Pulse spy={this.state.pulser[2]}>
            <div onClick={this.go.bind(this, '/education')}><SchoolSVG /></div>
          </Pulse>
        </Fade>
        
        <Fade big bottom when={this.props.show_icons} duration={1000}>
          <Pulse spy={this.state.pulser[3]}>
            <div onClick={this.go.bind(this, '/video')}><VideoSVG /></div>
          </Pulse>
        </Fade>
      </nav>
    );
  }
})

export default withRouter(NavIcons);
