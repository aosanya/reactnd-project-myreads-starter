import React, { Component } from 'react'

class BookshelfChanger extends Component {
  static propTypes = {

  }

  state = {

  }

  handleShelfChange = event => {

  }

  render() {
    const { shelf } = this.props
    return (
        <div className="book-shelf-changer">
            <select defaultValue={shelf} onChange={this.handleShelfChange()}>
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