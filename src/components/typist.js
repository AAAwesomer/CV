import React from 'react';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';
import { Redirect } from 'react-router-dom'

var createReactClass = require('create-react-class');

var Type = createReactClass({

  getInitialState() {
    return({exit: false,
            fade_typing: false})
  },

  componentDidMount(){
    this.setState({fade_typing: true})
  },

  exit(){
    this.setState({exit: true})
  },

  fadeTyping(){
    this.setState({fade_typing: false})
    setTimeout(this.exit, 200)
  },

  completeTyping(){
    setTimeout(this.fadeTyping, 1000)
  },

  render() {
    var redirect;
    if (this.state.exit) {
      redirect = <Redirect to='/home' />
    }

    return (
      <div className="type">
        <Fade when={this.state.fade_typing} duration={200}>
          <Typist className="header-typist" avgTypingDelay={50} 
                                            startDelay={400} 
                                            onTypingDone={this.completeTyping}>
            <span>HELLO, AND WELCOME TO MY RESUM</span>
              <Typist.Backspace count={5} delay={200} />
            <span>ONLINE CV.</span>
              <Typist.Backspace count={35} delay={400} />
            <span>USE THESE ICONS TO FIN</span>
              <Typist.Backspace count={3} delay={200} />
            <span>NAVIGATE THROUGH MY WEBSITE.</span>
          </Typist>

          <div className='btn'>
            <button className='skip-button' onClick={this.exit}>SKIP</button>
          </div>
        </Fade>

        {redirect}

      </div>
    );
  }
})

export default Type;