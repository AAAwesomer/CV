import React from 'react';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';

import NavIcons from './navicons'
import Footer from './footer'

var createReactClass = require('create-react-class');

var Header = createReactClass({

  getInitialState() {
    return({show_typing: true, 
            show_icons: false,
            fade_typing: false,
            footer: false})
  },

  componentDidMount(){
    this.setState({fade_typing: true})
  },

  exitTyping(){
    this.setState({ show_typing: false,
                    show_icons: true,
                    footer: true})
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
    
    var footer;
    if (this.state.footer) {
      footer = <Footer />
    }

    return (
      <header className="App-header">
        
        <Fade when={this.state.fade_typing} duration={200}>
          <div className='typeText'> {typeText} </div>

          <div className='btn'>
            <button className='skip-button' style={buttonStyle} onClick={this.exitTyping}>SKIP</button>
          </div>
        </Fade>

        <NavIcons show_icons={this.state.show_icons} />

        {footer}
      </header>
    );
  }
})

export default Header;