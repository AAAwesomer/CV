import React from 'react';
import Fade from 'react-reveal/Fade';
import { SchoolSVG, GearSVG, VideoSVG, AwardSVG } from './svgs.js'
import TypeField from './type_field.js'

var createReactClass = require('create-react-class');

var Header = createReactClass({

  getInitialState() {
    return({show_fade: false})
  },

  showFade(){
    this.setState({show_fade: true})
  },

  typingFinished(){
    setTimeout(this.showFade, 800)
  },

  handleClick(){
    this.setState({show_typing: false})
  },

  render() {
    return (
      <header className="App-header">
        <TypeField />
        <SchoolSVG />
        <GearSVG />
        <VideoSVG />
        <AwardSVG />
        <Fade when={this.state.show_fade} duration={3000} bottom={true} distance={'0.2em'}>
          <span>OOOUU ICONS :)</span>
        </Fade>
      </header>
    );
  }
})

export default Header;
