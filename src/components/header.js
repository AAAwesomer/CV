import React from 'react';
import Fade from 'react-reveal/Fade';
import { SchoolSVG, GearSVG, VideoSVG, AwardSVG } from './svgs.js'
import Typist from 'react-typist';

var createReactClass = require('create-react-class');

var Header = createReactClass({

  getInitialState() {
    return({show_typing: true, 
            fade_text_array: ["OOOUU ICONS :)", 
                              "SCHOOL BAG: EDUCATION, GEAR: SKILLS, MEDA...you get it",
                              "CLICK ON AN ICON TO FIND OUT MORE ABOUT ME!",
                              "WHAT ARE YOU WAITING FOR???"],
            fade_text_index: 0, 
            show_fade_text: false, 
            show_icons: false,
            fade_typing: true})
  },

  showFade() {
    var next_idx = (this.state.fade_text_index + 1) % this.state.fade_text_array.length
    this.setState({fade_text_index: next_idx})
    this.setState({show_fade_text: true})
    setTimeout(this.hideFade, 5000)
  },

  hideFade() {
    this.setState({show_fade_text: false})
    setTimeout(this.showFade, 10000)
  },

  exitTyping(){
    this.setState({show_typing: false})
    this.setState({show_icons: true})
    setTimeout(this.showFade, 3000)
  },

  fadeTyping(){
    this.setState({fade_typing: false})
    setTimeout(this.exitTyping, 200)
  },

  completeTyping(){
    setTimeout(this.fadeTyping, 1000)
  },

  render() {
    var showButton = this.state.show_typing ? 'block' : 'none'
    var buttonStyle = { display: showButton }

    var typeText;
    if (this.state.show_typing) {
      typeText =  <Typist className="header-typist" avgTypingDelay={40} 
                                                    startDelay={200} 
                                                    onTypingDone={this.completeTyping}>
                    <span>HELLO, AND WELCOME TO MY RESUM</span>
                      <Typist.Backspace count={5} delay={200} />
                    <span>ONLINE CV.</span>
                      <Typist.Backspace count={35} delay={400} />
                    <span>USE THESE ICONS TO FIN</span>
                      <Typist.Backspace count={3} delay={200} />
                    <span>NAVIGATE THROUGH MY WEBSITE.</span>
                  </Typist>
    }

    return (
      <header className="App-header">
        <Fade when={this.state.fade_typing} duration={200}>
          <div className='typeText'> {typeText} </div>

          <div className='btn'>
            <button className='skip-button' style={buttonStyle} onClick={this.exitTyping}>SKIP</button>
          </div>
        </Fade>

        <Fade when={this.state.show_icons} duration={1000} top={true}>
          <SchoolSVG />
        </Fade>
        <Fade when={this.state.show_icons} duration={1000} left={true}>
          <GearSVG />
        </Fade>
        <Fade when={this.state.show_icons} duration={1000} right={true}>
          <AwardSVG />
        </Fade>
        <Fade when={this.state.show_icons} duration={1000} bottom={true}>
          <VideoSVG />
        </Fade>

        <Fade when={this.state.show_fade_text} bottom={true} duration={2000} distance={'0.2em'}>
          <span className={'fade-text'}> {this.state.fade_text_array[this.state.fade_text_index]} </span>
        </Fade>
      </header>
    );
  }
})

export default Header;
