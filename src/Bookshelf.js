import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    const {shelf} = this.props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map((book) => (
                        <li key={book.id} className='book-list-item'>
                            <Book book={book} shelf={shelf}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
  }
}

export default BookShelf