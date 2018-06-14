import React, { Component } from 'react'

class Author extends Component {
  static propTypes = {

  }


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