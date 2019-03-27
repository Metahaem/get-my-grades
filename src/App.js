import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import People from './People'
import Navbar from './Navbar'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch className='App'>
          <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
          <Route path='/people' component={routerProps => <People className='Staff' {...routerProps} />} />
          <Route path='/about' component={routerProps => <About {...routerProps} />} />
        </Switch>
      </div>
    )
  }
}

export default App
