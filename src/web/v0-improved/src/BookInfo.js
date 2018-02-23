import React, { Component } from 'react';
import jdnak from './jdnak.jpg';

export default class BookInfo extends Component {

  shouldComponentUpdate() {
    return false;
  }

	render() {
		return (
				<div style={styles.BookInfo} className = "BookInfo">
          <div className = "BookInfoItem BookNameAuthor">
            <h1>{this.props.bookName}</h1>
            <h2>- {this.props.authors.join(", ")}</h2>
          </div>
          <div className = "BookInfoItem BookImage">
            <img src = {jdnak}/>
          </div>
        </div>
			);
	}
}

const styles = {
  BookInfo: {
    height: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  BookNameAuthor: {
    // flexGrow: 1
  },
  BookImage: {
    // flexGrow: 2
  }
}
