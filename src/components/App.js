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
import OpenAddPost from './OpenAddPost'
import CreatePost from './CreatePost'

class App extends Component {

  render() {
    return (
      <div className='container readability-app'>
        <Router>
          <Switch>
            <Route exact path='/' render={() => (
              <div className='row'>
                <Categories />
                <Posts />
                <OpenAddPost />
              </div>
            )}/>
            <Route exact path='/:category/posts' render={(props) => (
              <div>
                <CategoryPosts {...props} />
              </div>
            )}/>
            <Route path='/posts/:id'  render={props =>  (
              <div className='row'>
                <Categories />
                <Post {...props} />
              </div>
            )}/>
            <Route exact path="/post/create" component={ CreatePost } />
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
