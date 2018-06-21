import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './../BooksAPI'
import './../App.css'
import Bookshelf from './Bookshelf'
import * as bookLogic from './../logic/Book'
import * as myReadsLogic from './../logic/MyReads'

class Search extends Component {
    state = {
        searchResults : [],
        myReads : []
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

    onSearch = (event) =>{
        (event.target.value.trim === "") ? this.clearSearch() : this.callSearchApi(event.target.value.trim())
    }

    clearSearch = () =>{
        this.setState((currentState) => ({searchResults: []}))
    }

    callSearchApi = (searchCriteria) =>{
        BooksAPI.search(searchCriteria)
            .then((searchResults) => {
                this.loadResults(searchResults)
        })
    }

    loadResults = (searchResults) => {
        if (searchResults === undefined) {
            this.setState((currentState) => ({searchResults: searchResults.map((result) => ({book : result, shelf : bookLogic.getShelf(result, this.state.myReads)}))}))
            this.clearSearch()
            return
        }
        (searchResults.items === undefined) ?
        this.setState((currentState) => ({searchResults: searchResults.map((result) => ({book : result, shelf : bookLogic.getShelf(result, this.state.myReads)}))}))
        : this.clearSearch()
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
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className='close-search'
                        to={{pathname : '/',
                        state : {myReads : this.state.myReads}}}>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                    {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author" onChange={this.onSearch.bind(this)}/>

                    </div>
                </div>
                <div className="search-books-results">
                     {this.state.searchResults.length > 0 ? <Bookshelf title="Search Results" shelvedBooks={this.state.searchResults} handleShelfChange={this.handleShelfChange}/> : this.state.message}
                </div>
            </div>
        )
    }
}

export default Search