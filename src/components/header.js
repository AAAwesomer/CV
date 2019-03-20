// header component with simple navigation menu and footer

import React from 'react';
import NavIcons from './navicons'
import Footer from './footer'

import profile from './SketchProfile.png'

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

  // hides icons and footer before redirect
  redirect(to){
    this.setState({ show_icons: false,
                    show_footer: false})
                    
    setTimeout(() => {this.props.history.push(to)}, 500)
  },

  

  render() {

    return (
      <header className="App-header">
        <img className='profile' src={profile} alt="Profile" />

        <NavIcons show_icons={this.state.show_icons} redirect={this.redirect}/>

        <Footer show_footer={this.state.show_footer}/> 

      </header>
    );
  }
})

export default Header;