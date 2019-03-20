// Icon navigation menu that uses react-reveal for fade ins, fade outs and pulsations

import React from 'react';
import { withRouter } from 'react-router-dom'
import { SchoolSVG, SkillSVG, VideoSVG, AchievementSVG } from './svgs.js'

import Fade from 'react-reveal/Fade';

var createReactClass = require('create-react-class');

var NavIcons = createReactClass({

  go(to){
    this.props.redirect(to)
  },

  render() {
    return (
      <nav className="navigation">
        <div>
          <Fade big top when={this.props.show_icons} duration={1000}>
            <div className="navicon" onClick={this.go.bind(this, '/skills')}><SkillSVG /></div>
          </Fade>
        </div>
        <div>
          <Fade big left when={this.props.show_icons} duration={1000}> 
            <div className="navicon" onClick={this.go.bind(this, '/achievements')}><AchievementSVG /></div>
          </Fade>
        </div>
        <div>
          <Fade big right when={this.props.show_icons} duration={1000}>
            <div className="navicon" onClick={this.go.bind(this, '/education')}><SchoolSVG /></div>
          </Fade>
        </div>
        <div>
          <Fade big bottom when={this.props.show_icons} duration={1000}>
            <div className="navicon" onClick={this.go.bind(this, '/video')}><VideoSVG /></div>
          </Fade>
        </div>
      </nav>
    );
  }
})

export default withRouter(NavIcons);
