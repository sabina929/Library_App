import React, { Component } from 'react';
import BookInput from './components/BookInput'
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import uuid from "uuid";
import './App.css';

class App extends Component {
  state ={
    books: [
      {
        id: 1,
        bookName: "Dune",
        author: "Frank Herbert",
        publishedDate: "1965-08-01",
        genre: "Science fiction"
      },
      {
        id: 2,
        bookName: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        publishedDate: "1954-07-29",
        genre: "Fantasy"
      },
      {
        id: 3,
        bookName: "The Three-Body Problem",
        author: "Lui Cixin",
        publishedDate: "2008-01-01",
        genre: "Science fiction"
      },
      {
        id: 4,
        bookName: "A Storm of Swords",
        author: "George R. R. Martin",
        publishedDate: "2000-10-30",
        genre: "Fantasy"
      },
      {
        id: 5,
        bookName: "The Lies of Locke Lamora ",
        author: "Scott Lynch",
        publishedDate: "2006-06-27",
        genre: "Fantasy"
      },
      {
        id: 6,
        bookName: "The Silmarillion",
        author: "J. R. R. Tolkien",
        publishedDate: "1977-09-15",
        genre: "Fantasy"
      },
      {
        id: 7,
        bookName: "A Feast for Crows",
        author: "George R. R. Martin",
        publishedDate: "2005-10-03",
        genre: "Fantasy"
      },
      {
        id: 8,
        bookName: "A Wizard of Earthsea",
        author: "Ursula K. Le Guin",
        publishedDate: "1968-01-01",
        genre: "Fantasy"
      },
      {
        id: 9,
        bookName: "God Emperor of Dune",
        author: "Frank Herbert",
        publishedDate: "1981-05-28",
        genre: "Science fiction"
      },
      {
        id: 10,
        bookName: "Red Seas Under Red Skies",
        author: "Scott Lynch",
        publishedDate: "2007-06-20",
        genre: "Fantasy"
      },
      {
        id: 11,
        bookName: "Children of Dune",
        author: "Frank Herbert",
        publishedDate: "1976-04-01",
        genre: "Science fiction"
      },
      {
        id: 12,
        bookName: "The Name of the Wind",
        author: "Patrick Rothfuss",
        publishedDate: "2007-03-27",
        genre: "Fantasy"
      },
      {
        id: 13,
        bookName: "A Game of Thrones",
        author: "George R. R. Martin",
        publishedDate: "1996-07-29",
        genre: "Fantasy"
      },
      {
        id: 14,
        bookName: "The Hobbit",
        author: "J. R. R. Tolkien",
        publishedDate: "1937-09-21",
        genre: "Fantasy"
      },
      {
        id: 15,
        bookName: "The Republic of Thieves",
        author: "Scott Lynch",
        publishedDate: "2013-10-08",
        genre: "Fantasy"
      }
    ],
    currentBooks: [],
    id: uuid(),
    bookName: "",
    author: "",
    publishedDate: "",
    genre: "",
    booksPerPage: 5,
    currentPage: 1,
    sortedByName: false,
    sortedByAuthor: false,
    sortedByPublishedDate: false,
    sortedByGenre: false
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {id, bookName, author, publishedDate, genre} = this.state;
    const newBook = {
      id,
      bookName,
      author,
      publishedDate,
      genre
    }

    const updatedBooks = [...this.state.books, newBook];

    // GET CURRENT BOOKS
    const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooks = updatedBooks.slice(indexOfFirstBook, indexOfLastBook);
    // console.log(currentBooks);


    this.setState(() => {
      return {
        books: updatedBooks,
        currentBooks,
        id: uuid(),
        bookName: "",
        author: "",
        publishedDate: "",
        genre: ""
      }
    }
    )
  }


  updateBook = (id) => {
    const filteredBooks = this.state.books.filter(book => book.id !== id);
    const currentBook = this.state.books.find(book => book.id === id);

    // GET CURRENT BOOKS
    const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    this.setState({
      books: filteredBooks,
      currentBooks,
      id,
      bookName: currentBook.bookName,
      author: currentBook.author,
      publishedDate: currentBook.publishedDate,
      genre: currentBook.genre

    })
  }


  removeBook =(id) => {
    const filteredBooks = this.state.books.filter(book => book.id !== id);

    // GET CURRENT BOOKS
    const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    this.setState({
      books: filteredBooks,
      currentBooks,
    })
  }


  // SORTING
  // NAME
  sortByBookName =() => {
    const tempBooksOne = [...this.state.books];
    const tempBooksTwo = [...this.state.books];

    const booksSortedByName = tempBooksOne.sort((a, b) => a.bookName.toLowerCase().localeCompare(b.bookName.toLowerCase()));
    // console.log(booksSortedByName);

    const booksReversedByName = tempBooksTwo.sort((a, b) => {
      let comp = a.bookName.toLowerCase().localeCompare(b.bookName.toLowerCase())
      return -1 * comp
    });
    // console.log(booksReversedByName);

    // GET CURRENT BOOKS
    const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooksSortedByName = booksSortedByName.slice(indexOfFirstBook, indexOfLastBook);
    const currentBooksReversedByName = booksReversedByName.slice(indexOfFirstBook, indexOfLastBook);


    if (!this.state.sortedByName) {

      this.setState({
        books: booksSortedByName,
        currentBooks: currentBooksSortedByName,
        sortedByName: true
      });
    } else if (this.state.sortedByName) {

      this.setState({
        books: booksReversedByName,
        currentBooks: currentBooksReversedByName,
        sortedByName: false
      });
    }
  }


  // AUTHOR
  sortByAuthor =() => {
    const tempBooksOne = [...this.state.books];
    const tempBooksTwo = [...this.state.books];

    const booksSortedByAuthor = tempBooksOne.sort((a, b) => a.author.toLowerCase().localeCompare(b.author.toLowerCase()));
    // console.log(booksSortedByAuthor);

    const booksReversedByAuthor = tempBooksTwo.sort((a, b) => {
      let comp = a.author.toLowerCase().localeCompare(b.author.toLowerCase())
      return -1 * comp
    });
    // console.log(booksReversedByAuthor);

    // GET CURRENT BOOKS
    const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooksSortedByAuthor = booksSortedByAuthor.slice(indexOfFirstBook, indexOfLastBook);
    const currentBooksReversedByAuthor = booksReversedByAuthor.slice(indexOfFirstBook, indexOfLastBook);


    if (!this.state.sortedByAuthor) {

      this.setState({
        books: booksSortedByAuthor,
        currentBooks: currentBooksSortedByAuthor,
        sortedByAuthor: true
      });
    } else if (this.state.sortedByAuthor) {

      this.setState({
        books: booksReversedByAuthor,
        currentBooks: currentBooksReversedByAuthor,
        sortedByAuthor: false
      });
    }

  }


  // PUBLISHED DATE
  sortByPublishedDate =() => {
    const tempBooksOne = [...this.state.books];
    const tempBooksTwo = [...this.state.books];

    // const d = new Date().toISOString().split('T')[0]
    // console.log(d)
    // console.log(typeof d)

    const booksSortedByPublishedDate = tempBooksOne.sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate));
    // console.log(booksSortedByPublishedDate);

    const booksReversedByPublishedDate = tempBooksTwo.sort((a, b) => {
      let comp = new Date(a.publishedDate) - new Date(b.publishedDate)
      return -1 * comp
    });
    // console.log(booksReversedByPublishedDate);


    // GET CURRENT BOOKS
    const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooksSortedByPublishedDate = booksSortedByPublishedDate.slice(indexOfFirstBook, indexOfLastBook);
    const currentBooksReversedByPublishedDate = booksReversedByPublishedDate.slice(indexOfFirstBook, indexOfLastBook);


    if (!this.state.sortedByPublishedDate) {

      this.setState({
        books: booksSortedByPublishedDate,
        currentBooks: currentBooksSortedByPublishedDate,
        sortedByPublishedDate: true
      });
    } else if (this.state.sortedByPublishedDate) {

      this.setState({
        books: booksReversedByPublishedDate,
        currentBooks: currentBooksReversedByPublishedDate,
        sortedByPublishedDate: false
      });
    }

  }

  // GENRE
  sortByGenre =() => {
    const tempBooksOne = [...this.state.books];
    const tempBooksTwo = [...this.state.books];

    const booksSortedByGenre = tempBooksOne.sort((a, b) => a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()));
    // console.log(booksSortedByGenre);

    const booksReversedByGenre = tempBooksTwo.sort((a, b) => {
      let comp = a.genre.toLowerCase().localeCompare(b.genre.toLowerCase())
      return -1 * comp
    });
    // console.log(booksReversedByGenre);


    // GET CURRENT BOOKS
    const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooksSortedByGenre = booksSortedByGenre.slice(indexOfFirstBook, indexOfLastBook);
    const currentBooksReversedByGenre = booksReversedByGenre.slice(indexOfFirstBook, indexOfLastBook);

    if (!this.state.sortedByGenre) {

      this.setState({
        books: booksSortedByGenre,
        currentBooks: currentBooksSortedByGenre,
        sortedByGenre: true
      });
    } else if (this.state.sortedByGenre) {

      this.setState({
        books: booksReversedByGenre,
        currentBooks: currentBooksReversedByGenre,
        sortedByGenre: false
      });
    }

  }


  // PAGINATION
  paginate = (pageNumber) => {
    // console.log(pageNumber)

    const indexOfLastBook = pageNumber * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooks = this.state.books.slice(indexOfFirstBook, indexOfLastBook);


    this.setState(() => {
      return {
        currentBooks,
        currentPage: pageNumber
      }
    })
  }


  componentDidMount() {
    // GET CURRENT BOOKS
    const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooks = this.state.books.slice(indexOfFirstBook, indexOfLastBook);

    this.setState({
      currentBooks
    }
    )
  }


  render() {
    return (
      <React.Fragment>
      
         <BookInput bookName={this.state.bookName} author={this.state.author} publishedDate={this.state.publishedDate} genre={this.state.genre} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

         <BookList currentBooks={this.state.currentBooks} removeBook={this.removeBook} updateBook={this.updateBook} sortByBookName={this.sortByBookName} sortByAuthor={this.sortByAuthor} sortByPublishedDate={this.sortByPublishedDate} sortByGenre={this.sortByGenre}/>
         
          <Pagination booksPerPage={this.state.booksPerPage} books={this.state.books} currentPage={this.state.currentPage} paginate={this.paginate}/> 
      </React.Fragment>

      );
  }
}

export default App;