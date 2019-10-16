import React, { Component } from 'react'
import Book from "./Book";


export default class BookList extends Component {
  render() {
    const {currentBooks, removeBook, editBook, sortByBookName, sortByAuthor, sortByPublishedDate, sortByGenre} = this.props;

    return (
      <React.Fragment>
          <div className="wrapper">
            <h1>Books</h1>
              <div className="books-container">
                   <div className="book-details">
                        <div>Book Name <span onClick={sortByBookName}><i className="fas fa-sort"></i></span></div>
                        <div>Author <span onClick={sortByAuthor}><i className="fas fa-sort"></i></span></div>
                        <div>Published Date <span onClick={sortByPublishedDate}><i className="fas fa-sort"></i></span></div>
                        <div>Genre <span onClick={sortByGenre}><i className="fas fa-sort"></i></span></div>
                    </div>
                  {
      currentBooks.map((book, index) => {
        return (
          <Book key={book.id} range={index} book={book} removeBook={() => removeBook(book.id)} editBook={() => editBook(book.id)}/>
        )
      })
      } 
             </div>
          </div>
        </React.Fragment>

    )
  }
}