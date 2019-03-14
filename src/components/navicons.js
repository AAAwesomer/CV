import React from 'react';
import { withRouter } from 'react-router-dom'
import { SchoolSVG, GearSVG, VideoSVG, AwardSVG } from './svgs.js'
import Fade from 'react-reveal/Fade';

var createReactClass = require('create-react-class');

var NavIcons = createReactClass({

  go(to){
    this.props.redirect(to)
  },

  render() {
    return (
      <nav>
        <Fade big top when={this.props.show_icons} duration={1000}>
          <div onClick={this.go.bind(this, '/skills')}><GearSVG /></div>
        </Fade>

        <Fade big left when={this.props.show_icons} duration={1000}> 
          <div onClick={this.go.bind(this, '/achievements')}><AwardSVG /></div>
        </Fade>

        <Fade big right when={this.props.show_icons} duration={1000}>
          <div onClick={this.go.bind(this, '/education')}><SchoolSVG /></div>
        </Fade>
        
        <Fade big bottom when={this.props.show_icons} duration={1000}>
          <div onClick={this.go.bind(this, '/video')}><VideoSVG /></div>
        </Fade>
      </nav>
    );
  }
})

export default withRouter(NavIcons);
