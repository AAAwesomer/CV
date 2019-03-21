// header component with simple navigation menu and footer

import React from 'react';
import NavIcons from './navicons'
import Footer from './footer'

import Fade from 'react-reveal/Fade';

import profile from './SketchProfile.png'

var createReactClass = require('create-react-class');

var Header = createReactClass({

  getInitialState(){
    return({show_icons: false,
            show_footer: false})
  },

  componentDidMount(){
    setTimeout(() => {
      this.setState({ show_icons: true,
                      show_footer: true})
      }, 200)
  },

  // hides icons and footer before redirect
  redirect(to){
    this.setState({ show_icons: false,
                    show_footer: false})
                    
    setTimeout(() => {this.props.history.push(to)}, 600)
  },

  render() {

    return (
      <header className="App-header">
        <Fade top when={this.state.show_icons} duration={600} distance={'0.2em'}>
          <img className='profile' src={profile} alt="Profile" />
        </Fade>
        <Fade bottom when={this.state.show_icons} duration={600} distance={'0.2em'}>
          <NavIcons redirect={this.redirect}/>

          <div className="header-text">
            <div className="name">Aarni Alasaarela</div>
            <div className="title">Deep Learning Engineer</div>
          </div>
        </Fade>

        <Footer show_footer={this.state.show_footer}/> 

      </header>
    );
  }
})

export default Header;