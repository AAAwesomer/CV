// footer for header which fades in/out with changing content

import React from 'react';
import Fade from 'react-reveal/Fade';

var createReactClass = require('create-react-class');

var Footer = createReactClass({

  getInitialState() {
    return({fade_text_array: ["OOOUU ICONS :)", 
                              "BULB: SKILLS, MEDAL: ACHIEV...you get it",
                              "CLICK AN ICON TO FIND OUT MORE ABOUT ME!",
                              "LEAVE A MESSAGE USING THE MAIL ICON ABOVE"],
            fade_text_index: 0, 
            show_fade_text: false})
  },

  componentDidMount() {
    this.timeout = setTimeout(this.fadeIn, 3000)
  },

  componentWillUnmount() {
    clearTimeout(this.timeout)
  },

  // sets next index in text array, shows text and calls timeout for fadeout
  fadeIn() {
    var next_idx = (this.state.fade_text_index + 1) % this.state.fade_text_array.length
    this.setState({fade_text_index: next_idx})
    this.setState({show_fade_text: true})
    this.timeout = setTimeout(this.fadeOut, 6000)
  },

  // hides text and calls timeout for fadein
  fadeOut() {
    this.setState({show_fade_text: false})
    this.timeout = setTimeout(this.fadeIn, 8000)
  },

  render() {

    return (
      <div className="footer">
        <Fade when={this.props.show_footer} bottom={true} duration={500} distance={'0.2em'}>
          <Fade when={this.state.show_fade_text} bottom={true} duration={2000} distance={'0.2em'}>
            <div className='fade-text'> 
              {this.state.fade_text_array[this.state.fade_text_index]}
            </div>
          </Fade>
        </Fade>
      </div>
    );
  }
})

export default Footer;