import React from 'react';
import { Link } from 'react-router-dom'
import { SchoolSVG, GearSVG, VideoSVG, AwardSVG } from './svgs.js'
import Fade from 'react-reveal/Fade';

var createReactClass = require('create-react-class');

var NavIcons = createReactClass({

  render() {
    return (
      <nav>
        <Fade big top when={this.props.show_icons} duration={1000}>
          <Link to="/skills"><GearSVG /></Link>
        </Fade>

        <Fade big left when={this.props.show_icons} duration={1000}> 
          <Link to="/achievements"><AwardSVG /></Link>
        </Fade>

        <Fade big right when={this.props.show_icons} duration={1000}>
        <Link to="/education"><SchoolSVG /></Link>
        </Fade>
        
        <Fade big bottom when={this.props.show_icons} duration={1000}>
          <Link to="/video"><VideoSVG /></Link>
        </Fade>
      </nav>
    );
  }
})

export default NavIcons;
