import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../css/App.css'

import Categories from './Categories'
import CategoryView from './categoryView'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <Route exact path='/' render={() => (
            <Categories />
          )}/>

          <Route exact path="/:category" render={() => (
            <CategoryView />
          )}/>

        </div>
      </div>
    );
  }
}

export default App;
