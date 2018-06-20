import React, { Component } from 'react'
import Author from './Author'
import BookshelfChanger from './BookshelfChanger'
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        handleShelfChange : PropTypes.func
    }

    state = {

    }

    render() {
        const { book, shelf, handleShelfChange  } = this.props
        return (

            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks !== undefined ? `url(${book.imageLinks["smallThumbnail"]})` : 'none' }}></div>
                <BookshelfChanger book={book} shelf={shelf} handleShelfChange={handleShelfChange}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors !== undefined ? book.authors.map((author, index, {length}) => (<Author  key={author} author={author}/>)) : ''}
                </div>
            </div>
        )
    }
}

export default Book