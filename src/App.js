import React from 'react'
import Search from './Components/Search'
import Bookshelves from './Components/Bookshelves'
import './App.css'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    mainReads : 'test'
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Bookshelves}/>
        <Route path='/search' component={Search}/>
      </div>
    )
  }
}

export default BooksApp
