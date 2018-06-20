import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import * as bookShelvesLogic from './../logic/Bookshelves'
import * as myReadsLogic from './../logic/MyReads'

class BookShelves extends Component {
    state = {
        Bookshelves : [],
        myReads : [],
    }

    componentDidMount() {
        if (this.props.location.state === undefined){
            return
        }

        if (this.props.location.state.myReads === undefined){
            return
        }

        this.setState((currentState) => ({myReads: this.props.location.state.myReads}))
    }

    handleShelfChange = (book, shelf) => {
        this.setState((currentState) => (
            {
                myReads: myReadsLogic.removeBook(currentState.myReads, book)
            }
        ))

        if (shelf === 'none'){
            return
        }

        this.setState((currentState) => (
            {
                myReads: currentState.myReads.concat({book : book, shelf : shelf})
            }
        ))
    }

    render() {
        console.log(this.state.myReads)
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <div className="bookshelves">
                        <Bookshelf title="Currently Reading" shelvedBooks={bookShelvesLogic.getBookshelf(this.state.myReads, "currentlyReading")} handleShelfChange={this.handleShelfChange}/>
                        <Bookshelf title="Want to Read" shelvedBooks={bookShelvesLogic.getBookshelf(this.state.myReads, "wantToRead")} handleShelfChange={this.handleShelfChange}/>
                        <Bookshelf title="Read" shelvedBooks={bookShelvesLogic.getBookshelf(this.state.myReads, "read")} handleShelfChange={this.handleShelfChange}/>
                    </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to={{pathname : '/Search',
                        state : {myReads : this.state.myReads}}}>
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

export default BookShelves