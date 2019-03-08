import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Header from './components/header.js'
import Achievements from './components/achievements'
import Education from './components/education'
import Skills from './components/skills'
import Video from './components/video'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        {/*<Router>
          <div>
            <Route path="/" component={Header} exact />
            <Route path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/video" component={Video} />
          </div>
        </Router>*/}
      </div> 
    );
  }
}

export default App;
