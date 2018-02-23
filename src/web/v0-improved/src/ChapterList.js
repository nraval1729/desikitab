import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default class ChapterList extends Component {

  shouldComponentUpdate() {
    return false;
  }

  generateChapterListItems = () => {
    const chapters = this.props.chapters;
    return chapters.map((chapter, index) => {
      const primaryText = (index+1) +".  " +chapter["chapterName"];
      return (
              <ListItem 
                divider
                className = "ChapterListItem"
                button 
                key={chapter["url"]}
                onClick = {() => this.props.onChapterChange(chapter)}
                style = {styles.ListItem}
              >
                <ListItemText primary = {primaryText}/>
              </ListItem>
              );
    });
  }

	render() {
		return (
        <List 
          className = "ChapterList"
          style = {styles.List}
        >
          {this.generateChapterListItems()}
        </List>
		);
	}
}

const styles = {
  List: {
    maxHeight: '40%',
    overflowY: 'auto',
  },
  ListItem: {
    marginTop: '0.5%',
    // backgroundColor: '#AED581',
    borderRadius: '2%'
  }
}
