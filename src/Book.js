import React, { Component } from 'react'
import Author from './Author'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {
  static propTypes = {

  }

  state = {

  }

  handleShelfChange = event => {

  }
  render() {
    const { book, shelf } = this.props
    return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks["smallThumbnail"]})` }}></div>
            <BookshelfChanger shelf={shelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors.map((author, index, {length}) => (
                    <Author  key={author} author={author}/>
                ))}
            </div>
        </div>
    )
  }
}

export default Book