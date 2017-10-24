import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/App.css'

import Categories from './Categories'
import Posts from './Posts'
import CategoryView from './categoryView'

class App extends Component {

  render() {
    return (
      <div className='container'>
          <Route exact path='/' render={() => (
            <div className='row'>
              <Categories />
              <Posts />
            </div>
          )}/>

          <Route exact path='/:category' render={() => (
            <CategoryView />
          )}/>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(App)
