import React, { Component } from 'react';
import BookInfo from './BookInfo';
import ChapterList from './ChapterList';
import Player from './Player';

export default class PlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currChapter: {
        chapterName : '',
        url     : ''
      }
    };
    this.metadata = this.props.metadata;
  }

  handleChapterChange = (currChapter) => {
    this.setState({currChapter: currChapter});
  }

  render() {
    return (
      <div className = "PlayerView">
        <BookInfo
          bookName = {this.metadata.bookName}
          authors  = {this.metadata.authors}
          image    = {this.metadata.image} 
        />
        <ChapterList
          chapters        = {this.metadata.chapters}
          onChapterChange = {this.handleChapterChange}
        />
        <Player
          shouldHide = {this.state.currChapter.url === '' ? true : false}
          currChapter = {this.state.currChapter}
        />
      </div>
    );
  }
}
