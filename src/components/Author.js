import React, { Component } from 'react'

class Author extends Component {
  render() {
    const {author} = this.props
    return (
        <div className="author">
            <a>{author}</a>
        </div>
    )
  }
}

export default Author