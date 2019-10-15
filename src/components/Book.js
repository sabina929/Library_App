import React, { Component } from 'react'

export default class Book extends Component {
  render() {

    const {book, range, updateBook, removeBook} = this.props
    return (
      <div className="single-book">
                <div>{range + 1}. {book.bookName}</div>
                <div>{book.author}</div>
                <div>{book.publishedDate}</div>
                <div>{book.genre} <span><i className="fas fa-pen" onClick={updateBook}/><i className="fas fa-trash" onClick={removeBook}/></span></div>
      </div>
    )
  }
}