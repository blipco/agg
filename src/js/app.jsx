import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={Home}/>
        </div>
      </Router>
    );
  };
};