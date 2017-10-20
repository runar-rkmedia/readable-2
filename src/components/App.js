import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions'
import '../css/App.css'
import * as FetchAPI from '../utils/FetchAPI';

import Categories from './Categories'


class App extends Component {
  state = {
    categories: null
  }


  getAllCategories = () => {
    FetchAPI.fetchCategories().then((categories) => this.setState({ categories }))
  }

  //componentDidMount() {

  //   const { store } = this.props
  //
  //   console.log('GrandChild did mount.', store);
  //
  //
  //   store.subscribe(() => {
  //     this.setState(() => {
  //       categories: store.getState()
  //     })
  //   })
  //}

  render() {
    return (
      <div className="container">
        <button onClick={ this.getAllCategories }>
          Activate Lasers
        </button>

      </div>
    );
  }
}

export default App;
