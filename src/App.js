import React from 'react'
import Search from './Search'
import Bookshelves from './Bookshelves'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
         <Route exact path='/' render={() => (
            <Bookshelves/>
        )} />
        <Route path='/search' render={() => (
            <Search/>
        )} />
      </div>
    )
  }
}

export default BooksApp
