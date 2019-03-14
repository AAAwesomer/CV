import React from 'react';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';

import NavIcons from './navicons'
import Footer from './footer'

var createReactClass = require('create-react-class');

var Header = createReactClass({

  getInitialState(){
    return({show_icons: false,
            show_footer: false})
  },

  componentDidMount(){
    this.setState({ show_icons: true,
                    show_footer: true})
  },

  redirect(to){
    this.setState({ show_icons: false,
                    show_footer: false})
                    
    setTimeout(() => {this.props.history.push(to)}, 1000)
  },

  

  render() {

    return (
      <header className="App-header">

        <NavIcons show_icons={this.state.show_icons} redirect={this.redirect}/>

        <Footer show_footer={this.state.show_footer}/>
        

      </header>
    );
  }
})

export default Header;