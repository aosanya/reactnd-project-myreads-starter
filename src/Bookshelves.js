import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class BookShelves extends Component {
    state = {
        books : [],
        myReads : [],
      }

      loadMyBooks = () => {
            this.setState((currentState) => (
                {
                    myReads: currentState.myReads.concat({book : this.state.books[0], shelf : "currentlyReading"})
                }
            ))
            this.setState((currentState) => (
                {
                    myReads: currentState.myReads.concat({book : this.state.books[1], shelf : "currentlyReading"})
                }
            ))
            this.setState((currentState) => (
                {
                    myReads: currentState.myReads.concat({book : this.state.books[2], shelf : "wantToRead"})
                }
            ))
            this.setState((currentState) => (
                {
                    myReads: currentState.myReads.concat({book : this.state.books[3], shelf : "wantToRead"})
                }
            ))
            this.setState((currentState) => (
                {
                    myReads: currentState.myReads.concat({book : this.state.books[4], shelf : "read"})
                }
            ))
            this.setState((currentState) => (
                {
                    myReads: currentState.myReads.concat({book : this.state.books[5], shelf : "read"})
                }
            ))

      }

      getShelf(shelf) {
        return this.state.myReads.filter((shelvedBook) =>(shelvedBook.shelf === shelf))
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
                    <Bookshelf title="Currently Reading" shelvedBooks={this.getShelf("currentlyReading")}/>
                    <Bookshelf title="Want to Read" shelvedBooks={this.getShelf("wantToRead")}/>
                    <Bookshelf title="Read" shelvedBooks={this.getShelf("read")}/>
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