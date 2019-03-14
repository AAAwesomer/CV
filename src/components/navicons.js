import React from 'react';
import { withRouter } from 'react-router-dom'
import { SchoolSVG, GearSVG, VideoSVG, AwardSVG } from './svgs.js'
import Fade from 'react-reveal/Fade';

var createReactClass = require('create-react-class');

var NavIcons = createReactClass({

  getInitialState(){
    return({redirect: '',
            show_icons: false})
  },

  componentDidMount(){
    this.setState({show_icons: true})
  },

  go(to){
    this.setState({show_icons: false})
    setTimeout(() => {this.props.history.push(to)}, 1000)
  },

  render() {
    return (
      <nav>
        <Fade big top when={this.state.show_icons} duration={1000}>
        <div onClick={this.go.bind(this, '/skills')}><GearSVG /></div>
        </Fade>

        <Fade big left when={this.state.show_icons} duration={1000}> 
        <div onClick={this.go.bind(this, '/achievements')}><AwardSVG /></div>
        </Fade>

        <Fade big right when={this.state.show_icons} duration={1000}>
          <div onClick={this.go.bind(this, '/education')}><SchoolSVG /></div>
        </Fade>
        
        <Fade big bottom when={this.state.show_icons} duration={1000}>
        <div onClick={this.go.bind(this, '/video')}><VideoSVG /></div>
        </Fade>
      </nav>
    );
  }
})

export default withRouter(NavIcons);
