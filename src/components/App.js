import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../css/App.css'

import Categories from './Categories'
import CategoryView from './categoryView'

class App extends Component {

  render() {
    return (
      <div className='container'>
          <Route exact path='/' render={() => (
            <Categories />
          )}/>

          <Route exact path='/:category' render={() => (
            <CategoryView />
          )}/>
      </div>
    );
  }
}

export default App;
