import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import books from './Books';

export default class Desikitab extends Component {

  // First push /player on the history,
  // then, call the parent handler to 
  // pass the currentBook
  handlePlayClick = (book) => {
    this.props.history.push("/player");
    this.props.onPlayClick(book);
  }

  generateBookItems = (books) => {
    return (books.map(book => {
      return (
        <Paper 
          elevation = {3}
          className = "DesikitabBookItem"
          key = {book.bookName}
          style = {styles.DesikitabBookItem}
        >
          <img src = {book.image} alt = {book.bookName}/>
          <h2 style={{textAlign:'center'}}>{book.bookName}</h2>
          <h3 style={{textAlign:'center'}}>{book.authors}</h3>
          <Button 
            variant="raised" 
            color="primary"
            onClick={() => this.handlePlayClick(book)}
          >
            Play
          </Button>
        </Paper>
        );
    }));
  }

  render() {
    return (
      <div>
        <header>
          <h1 style={{textAlign:'center'}}>Jain Books</h1>
        </header>
        <div style = {styles.Desikitab} className = "Desikitab">
          {this.generateBookItems(books)}
        </div>
        </div>
    );
  }
}

const styles = {
  Desikitab: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  DesikitabBookItem: {
    flexGrow: 1,
    textAlign: 'center',
    flex: '1 1 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '5px solid #673AB7',
    padding: '2em 1em',
    margin: '0.5em',
    borderRadius: 4
  }
}

