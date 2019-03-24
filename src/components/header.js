// header component with simple navigation menu and footer

import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import CopyToClipboard from 'react-copy-to-clipboard';

import NavIcons from './navicons'
import Footer from './footer'

import profile from '../images/sketch-profile.png'

var createReactClass = require('create-react-class');

var Header = createReactClass({

  getInitialState(){
    return({show_icons: false,
            show_footer: false,
            show_copied: false})
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
                    show_footer: false,
                    show_copied: false})
                    
    setTimeout(() => {this.props.history.push(to)}, 600)
  },

  copied(){
    clearTimeout(this.timeout)
    this.setState({show_copied: true})
    this.timeout = setTimeout(() => {this.setState({show_copied: false})}, 5000)
  },

  componentWillUnmount() {
    clearTimeout(this.timeout)
  },

  render() {

    return (
      <header className="App-header">
        <Fade when={this.state.show_copied} duration={600}>
          <div className="copied">Copied to clipboard!</div>
        </Fade>

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

        <div className="footnote">
          © 2019 Aarni Alasaarela | <a className='footnote-link' href="https://www.linkedin.com/in/aarnia/"
          >linkedin</a> | <a className='footnote-link' href="https://github.com/AAAwesomer"
          >GitHub</a> | <Link className='footnote-link' to='credits'
          >Credits</Link> | <CopyToClipboard text={'+358452471918'} onCopy={this.copied}
          ><span className='footnote-link'>+358452471918</span></CopyToClipboard>
        </div>

      </header>
    );
  }
})

export default Header;