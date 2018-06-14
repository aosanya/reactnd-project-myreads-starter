import React from 'react'
import AddBook from './AddBook'
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
        <Route path='/AddBook' render={() => (
            <AddBook/>
        )} />
      </div>
    )
  }
}

export default BooksApp
