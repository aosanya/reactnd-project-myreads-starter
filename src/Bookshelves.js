import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class BookShelves extends Component {
    state = {
        books : [],
        currentlyReading : [],
        wantToRead : [],
        read : []
      }

      loadMyBooks = () => {
        this.setState((currentState) => ({currentlyReading: currentState.currentlyReading.concat(this.state.books[0])}))
        this.setState((currentState) => ({currentlyReading: currentState.currentlyReading.concat(this.state.books[1])}))
        this.setState((currentState) => ({wantToRead: currentState.currentlyReading.concat(this.state.books[2])}))
        this.setState((currentState) => ({wantToRead: currentState.currentlyReading.concat(this.state.books[3])}))
        this.setState((currentState) => ({read: currentState.currentlyReading.concat(this.state.books[4])}))
        this.setState((currentState) => ({read: currentState.currentlyReading.concat(this.state.books[5])}))
      }

      componentDidMount() {
        BooksAPI.getAll()
          .then((books) => {
            this.setState(() => ({
              books
            }), () => {
                this.loadMyBooks()
            })
          })
      }

  render() {


    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelves">
                    <Bookshelf title="Currently Reading" books={this.state.currentlyReading} shelf="currentlyReading"/>
                    <Bookshelf title="Want to Read" books={this.state.wantToRead} shelf="wantToRead"/>
                    <Bookshelf title="Read" books={this.state.read} shelf="read"/>
                </div>
                </div>
            </div>
            <div className="open-search">
                <Link
                    to='/AddBook'>
                    Add a book
                </Link>
            </div>
          </div>
    )
  }
}

export default BookShelves