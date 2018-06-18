import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.shelvedBooks.map((shelvedBook) => (
                        <li key={shelvedBook.book.id} className='book-list-item'>
                            <Book book={shelvedBook.book} shelf={shelvedBook.shelf}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
  }
}

export default BookShelf