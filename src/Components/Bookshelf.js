import React, { Component } from 'react'
import Book from './../Components/Book'
import PropTypes from 'prop-types';

class BookShelf extends Component {
    static propTypes = {
        handleShelfChange : PropTypes.func
    }


    info = () => {
        return `showing ${this.props.shelvedBooks.length} ${this.props.shelvedBooks.length === 1 ? ` book` : ` books`}`
    }

    render() {
        const { title, shelvedBooks, handleShelfChange  } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <h5>{this.info()}</h5>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelvedBooks.map((shelvedBook) => (
                            <li key={shelvedBook.book.id} className='book-list-item'>
                                <Book book={shelvedBook.book} shelf={shelvedBook.shelf} handleShelfChange={handleShelfChange}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf