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
        genre: "Science fiction",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 2,
        bookName: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        publishedDate: "1954-07-29",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 3,
        bookName: "The Three-Body Problem",
        author: "Lui Cixin",
        publishedDate: "2008-01-01",
        genre: "Science fiction",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 4,
        bookName: "A Storm of Swords",
        author: "George R. R. Martin",
        publishedDate: "2000-10-30",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 5,
        bookName: "The Lies of Locke Lamora ",
        author: "Scott Lynch",
        publishedDate: "2006-06-27",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 6,
        bookName: "The Silmarillion",
        author: "J. R. R. Tolkien",
        publishedDate: "1977-09-15",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 7,
        bookName: "A Feast for Crows",
        author: "George R. R. Martin",
        publishedDate: "2005-10-03",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 8,
        bookName: "A Wizard of Earthsea",
        author: "Ursula K. Le Guin",
        publishedDate: "1968-01-01",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 9,
        bookName: "God Emperor of Dune",
        author: "Frank Herbert",
        publishedDate: "1981-05-28",
        genre: "Science fiction",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 10,
        bookName: "Red Seas Under Red Skies",
        author: "Scott Lynch",
        publishedDate: "2007-06-20",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 11,
        bookName: "Children of Dune",
        author: "Frank Herbert",
        publishedDate: "1976-04-01",
        genre: "Science fiction",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 12,
        bookName: "The Name of the Wind",
        author: "Patrick Rothfuss",
        publishedDate: "2007-03-27",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 13,
        bookName: "A Game of Thrones",
        author: "George R. R. Martin",
        publishedDate: "1996-07-29",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 14,
        bookName: "The Hobbit",
        author: "J. R. R. Tolkien",
        publishedDate: "1937-09-21",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      },
      {
        id: 15,
        bookName: "The Republic of Thieves",
        author: "Scott Lynch",
        publishedDate: "2013-10-08",
        genre: "Fantasy",
        style: {
          backgroundColor: "rgb(255, 255, 255)"
        }
      }
    ],
    currentBooks: [],
    id: uuid(),
    bookName: "",
    author: "",
    publishedDate: "",
    genre: "",
    edit: false,
    selected: false,
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

    const genreArr = genre.split("-");
    const firstLetter = genreArr[0].charAt(0).toUpperCase();
    const firstWord = genreArr[0].replace(genreArr[0].charAt(0), firstLetter);
    genreArr[0] = firstWord;
    // console.log(genreArr);

    const newBook = {
      id,
      bookName,
      author,
      publishedDate,
      genre: genreArr.join(' '),
      style: {
        backgroundColor: "rgb(255, 255, 255)"
      }
    }

    const updatedBooks = [...this.state.books, newBook];

    // GET CURRENT BOOKS
    const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
    const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
    const currentBooks = updatedBooks.slice(indexOfFirstBook, indexOfLastBook);
    // console.log(currentBooks);


    if (!this.state.edit) {
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
    if (this.state.edit) {

      let tempBooks = [...this.state.books];
      const selectedBook = this.state.books.find(book => book.id === this.state.id);
      // console.log(selectedBook)
      const index = tempBooks.indexOf(selectedBook);
      // console.log(index)
      const book = tempBooks[index];
      // console.log(book)
      book.bookName = this.state.bookName;
      book.author = this.state.author;
      book.publishedDate = this.state.publishedDate;
      book.genre = genreArr.join(" ");
      book.style = {
        backgroundColor: "rgb(255, 255, 255)"
      };
      // console.log(book)

      const editedBooks = [...tempBooks, book];
      // console.log(editedBooks)
      editedBooks.splice(-1, 1);
      // console.log(editedBooks)

      // GET CURRENT BOOKS
      const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
      const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
      const currentEditedBooks = editedBooks.slice(indexOfFirstBook, indexOfLastBook);

      this.setState(() => {
        return {
          books: editedBooks,
          currentBooks: currentEditedBooks,
          id: uuid(),
          bookName: "",
          author: "",
          publishedDate: "",
          genre: "",
           style: {
          backgroundColor: "rgb(255, 255, 255)"
        },
          selected: false,
          edit: false
        }
      }, () => {
        // console.log(this.state);
      }
      )
    }
  }


  editBook = (id) => {
    const selectedBook = this.state.books.find(book => book.id === id);
    
    if(!this.state.selected){
      selectedBook.style = {
        backgroundColor: "rgb(232, 232, 232)"
      };
      this.setState({
        id,
        bookName: selectedBook.bookName,
        author: selectedBook.author,
        publishedDate: selectedBook.publishedDate,
        genre: selectedBook.genre,
        selected: true,
        edit: true
      })
    }  else if(this.state.selected) {
      selectedBook.style = {
        backgroundColor: "rgb(255, 255, 255)"
      };
      this.setState({
        id: uuid(),
        bookName: '',
        author: '',
        publishedDate: '',
        genre: '',
        selected: false,
        edit: false
      })
    }


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
      id: uuid(),
      bookName: '',
      author: '',
      publishedDate: '',
      genre: '',
      selected: false,
      edit: false
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

    // const d = new Date().toISOString()
    // const d = new Date().toISOString().split('T')
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
         <BookInput bookName={this.state.bookName} author={this.state.author} publishedDate={this.state.publishedDate} genre={this.state.genre} edit={this.state.edit} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

         <BookList currentBooks={this.state.currentBooks} removeBook={this.removeBook} editBook={this.editBook} sortByBookName={this.sortByBookName} sortByAuthor={this.sortByAuthor} sortByPublishedDate={this.sortByPublishedDate} sortByGenre={this.sortByGenre}/>
         
         <Pagination booksPerPage={this.state.booksPerPage} books={this.state.books} currentPage={this.state.currentPage} paginate={this.paginate}/> 
      </React.Fragment>

      );
  }
}

export default App;