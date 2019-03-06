import React from 'react';
import Typist from 'react-typist';

var createReactClass = require('create-react-class');

var TypeField = createReactClass({

  getInitialState() {
    return({show_typing: true})
  },

  typingFinished(){
    setTimeout(this.showFade, 800)
  },

  handleClick(){
    this.setState({show_typing: false})
  },

  render() {
    console.log(this.state.show_typing)
    var typeText = <span></span>
    if (this.state.show_typing) {
      typeText =  <Typist className="header-typist" avgTypingDelay={50} startDelay={200} cursor={{hideWhenDone: true, hideWhenDoneDelay: 100}} onTypingDone={this.typingFinished}>
                    <span>HELLO, AND WELCOME TO MY RESUM</span>
                      <Typist.Backspace count={5} delay={200} />
                    <span>ONLINE CV.</span>
                      <Typist.Backspace count={35} delay={400} />
                    <span>USE THESE ICONS TO FIN</span>
                      <Typist.Backspace count={3} delay={200} />
                    <span>NAVIGATE MY WEBSITE.</span>
                      <Typist.Backspace count={39} delay={800} />
                  </Typist>
    }

    return (
      <div className='typeText' onClick={this.handleClick}> {typeText} </div>
    );
  }
})

export default TypeField;