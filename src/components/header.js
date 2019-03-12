import React from 'react';
import Fade from 'react-reveal/Fade';
import { SchoolSVG, GearSVG, VideoSVG, AwardSVG } from './svgs.js'
import Typist from 'react-typist';
import { Link } from 'react-router-dom'

import Achievements from './achievements'
import Education from './education'
import Skills from './skills'
import Video from './video'

var createReactClass = require('create-react-class');

var Header = createReactClass({

  getInitialState() {
    return({header: true,
            show_typing: true, 
            fade_text_array: ["OOOUU ICONS :)", 
                              "GEAR: SKILLS, MEDAL: ACHIEVEMENTS, SCHOOL BAG...you get it",
                              "CLICK AN ICON TO FIND OUT MORE ABOUT ME!",
                              "WHAT ARE YOU WAITING FOR???"],
            fade_text_index: 0, 
            show_fade_text: false, 
            show_icons: false,
            fade_typing: true})
  },

  componentWillMount(){
    /* console.log(window.location.pathname)
    if (window.location.pathname != '/' ) {
      this.setState({header: false})
    } */
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

  exitHeader(){
    this.setState({header: false})
  },

  goEducation(){
    this.exitHeader()
  },

  render() {
    var showHeader = ['/', 'home'].includes(window.location.pathname)
    var headerDisplay = showHeader ? 'flex' : 'none'
    var headerStyle = { display: headerDisplay }

    var showButton = this.state.show_typing ? 'block' : 'none'
    var buttonStyle = { display: showButton }

    var typeText;
    if (this.state.show_typing && showHeader) {
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
      <header className="App-header" style={headerStyle}>
        
        <Fade when={this.state.fade_typing} duration={200}>
          <div className='typeText'> {typeText} </div>

          <div className='btn'>
            <button className='skip-button' style={buttonStyle} onClick={this.exitTyping}>SKIP</button>
          </div>
        </Fade>

        <nav>
          <Fade big top when={this.state.show_icons} duration={1000}>
            <Link to="/skills"><GearSVG /></Link>
          </Fade>

          <Fade big left when={this.state.show_icons} duration={1000}> 
            <Link to="/achievements"><AwardSVG /></Link>
          </Fade>

          <Fade big right when={this.state.show_icons} duration={1000}>
            <Link to="/education" onClick={this.goEducation}><SchoolSVG /></Link>
          </Fade>
          
          <Fade big bottom when={this.state.show_icons} duration={1000}>
            <Link to="/video"><VideoSVG /></Link>
          </Fade>
        </nav>

        <Fade when={this.state.show_fade_text} bottom={true} duration={2000} distance={'0.2em'}>
          <span className={'fade-text'}> {this.state.fade_text_array[this.state.fade_text_index]} </span>
        </Fade>
      </header>
    );
  }
})

export default Header;