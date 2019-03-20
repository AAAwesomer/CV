// Icon navigation menu that uses react-reveal for fade ins, fade outs and pulsations

import React from 'react';
import { withRouter } from 'react-router-dom'
import { SchoolSVG, SkillSVG, VideoSVG, AchievementSVG } from './svgs.js'

var createReactClass = require('create-react-class');

var NavIcons = createReactClass({

  go(to){
    this.props.redirect(to)
  },

  render() {
    return (
      <nav className="navigation">
        <div>
          <div className="navicon" onClick={this.go.bind(this, '/skills')}><SkillSVG /></div>
        </div>
        <div>
          <div className="navicon" onClick={this.go.bind(this, '/achievements')}><AchievementSVG /></div>
        </div>
        <div>
          <div className="navicon" onClick={this.go.bind(this, '/education')}><SchoolSVG /></div>
        </div>
        <div>
          <div className="navicon" onClick={this.go.bind(this, '/video')}><VideoSVG /></div>
        </div>
      </nav>
    );
  }
})

export default withRouter(NavIcons);
