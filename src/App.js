import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Type from './components/typist'
import Header from './components/header'
import Achievements from './components/achievements'
import Education from './components/education'
import Skills from './components/skills'
import Video from './components/video'
import Credits from './components/credits'

var createReactClass = require('create-react-class');

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

var App = createReactClass({

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Type} />
            <Route path="/home" component={Header} />
            <Route path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/video" component={Video} />
            <Route path="/credits" component={Credits} />
            <Route path="/*" component={NoMatch}/>
          </Switch>
        </Router>
      </div> 
    );
  }
})

export default App;
