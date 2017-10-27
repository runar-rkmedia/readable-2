import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/App.css'


import Categories from './Categories'
import Posts from './Posts'
import Post from './Post'
import CategoryPosts from './CategoryPosts'

class App extends Component {

  render() {
    return (
      <div className='container'>
        <Router>
          <Switch>
            <Route exact path='/' render={() => (
              <div className='row'>
                <Categories />
                <Posts />
              </div>
            )}/>

            <Route exact path='/:category/posts' render={(props) => (
              <div className='row'>
                <Categories />
                <CategoryPosts {...props} />
              </div>
            )}/>

            <Route path='/posts/:id'  render={props =>  (
              <div className='row'>
                <Categories />
                <Post {...props} />
              </div>
            )}/>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(App)
