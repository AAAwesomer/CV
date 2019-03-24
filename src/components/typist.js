// Uses react-typist to create initial interaction with user

import React from 'react';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';
import { Redirect } from 'react-router-dom'

var createReactClass = require('create-react-class');

var Type = createReactClass({

  getInitialState() {
    return({exit: false,
            show_typing: false})
  },

  componentDidMount(){
    this.setState({show_typing: true})
  },

  exit(){
    this.setState({exit: true})
  },

  // sets timeout for exit in order to fade out before redirect
  fadeTyping(){
    this.setState({show_typing: false})
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
        <Fade when={this.state.show_typing} duration={200}>
          <Typist className="header-typist" avgTypingDelay={50} 
                                            startDelay={400} 
                                            onTypingDone={this.completeTyping}>
            <span>Hello, and welcome to my resum</span>
              <Typist.Backspace count={5} delay={200} />
            <span>online cv.</span>
              <Typist.Backspace count={35} delay={400} />
            <span>Use these icons to fin</span>
              <Typist.Backspace count={3} delay={200} />
            <span>navigate through my website.</span>
          </Typist>

          <div className='btn'>
            <button className='button' id="typist-button" onClick={this.exit}>Skip</button>
          </div>
        </Fade>

        {redirect}

      </div>
    );
  }
})

export default Type;