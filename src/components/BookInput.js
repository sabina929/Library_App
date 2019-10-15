import React, { Component } from 'react'

export default class BookInput extends Component {
  render() {
    const {bookName, author, publishedDate, genre, handleSubmit, handleChange} = this.props
    return (
      <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="bookName">Book Name</label>
                    <input type="text" name="bookName" id="bookName" value={bookName} onChange={handleChange} placeholder="Enter a book name..." required/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" value={author} onChange={handleChange} placeholder="Enter a author..." required/>
                </div>
                <div className="form-group">
                    <label htmlFor="publishedDate">Published date</label>
                    <input type="date" name="publishedDate" id="publishedDate" value={publishedDate} onChange={handleChange} max={new Date().toISOString().split('T')[0]} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <select name="genre" id="genre" value={genre} onChange={handleChange} required>
                        <option value="action-and-adventure">Action and adventure</option>
                        <option value="alternate-history">Alternate history</option>
                        <option value="anthology">Anthology</option>
                        <option value="autobiography">Autobiography</option>
                        <option value="children">Children</option>
                        <option value="comic-book">Comic book</option>
                        <option value="crime">Crime</option>
                        <option value="dictionary">Dictionary</option>
                        <option value="drama">Drama</option>
                        <option value="encyclopedia">Encyclopedia</option>
                        <option value="fairytale">Fairytale</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="guide">Guide</option>
                        <option value="graphic-novel">Graphic novel</option>
                        <option value="health">Health</option>
                        <option value="history">History</option>
                        <option value="horror">Horror</option>
                        <option value="mystery">Mystery</option>
                        <option value="memoir">Memoir</option>
                        <option value="paranormal">Paranormal</option>
                        <option value="poetry">Poetry</option>
                        <option value="political">Political</option>
                        <option value="romance">Romance</option>
                        <option value="religion">Religion</option>
                        <option value="satire">Satire</option>
                        <option value="science-fiction">Science fiction</option>
                        <option value="science">Science</option>
                        <option value="self-help">Self help</option>
                        <option value="thriller">Thriller</option>
                        <option value="travel">Travel</option>
                    </select>
                </div>

                <button type="submit">Add Book</button>
            </form> 
      </div>
    )
  }
}