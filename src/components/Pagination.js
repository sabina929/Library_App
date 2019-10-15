import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    const {booksPerPage, books, currentPage, paginate} = this.props;
    const pageNumbers = [];
    const totalBooks = books.length;
    // console.log(books)
    // console.log(totalBooks)
    // console.log(booksPerPage)
    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
      pageNumbers.push(i);
    }
    // console.log(pageNumbers)

    return (
      <div className="pagination">
            <ul>

                {
      pageNumbers.length === 0 ? <li className="selected" onClick={() => paginate(1)}><div>1</div></li> : null
      }
                  
       {
      pageNumbers.map(pageNumber => {
        return (

          <li key={pageNumber} className={pageNumber === currentPage ? "selected" : null} onClick={() => paginate(pageNumber)}><div>{pageNumber}</div></li>
        )
      })
      }
              </ul>
    </div>
    )
  }
}