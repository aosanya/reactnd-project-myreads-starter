import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {
  static propTypes = {
    book : PropTypes.object,
    shelf : PropTypes.string,
    handleShelfChange : PropTypes.func
  }

  onChange = (event) => {
    this.props.handleShelfChange(this.props.book, event.target.value)
  }

  render() {
    const {book, shelf } = this.props
    return (
        <div className="book-shelf-changer" key={`book-shelf-changer-${book.id}`}>
            <select defaultValue={shelf} onChange={this.onChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>
    )
  }
}

export default BookshelfChanger