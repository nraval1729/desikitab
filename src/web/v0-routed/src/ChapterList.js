import React, { Component } from 'react';
import List, { ListItem} from 'material-ui/List';

export default class ChapterList extends Component {

	generateChapterListItems = () => {
    const chapters = this.props.chapters;
    return chapters.map((chapter, index) => {
      const primaryText = (index) +".  " +chapter["name"];
      return (
              <ListItem 
                divider
                className = "ChapterListItem"
                button 
                key={chapter["url"]}
                onClick = {() => this.props.onChapterChange(index)}
              >
                {primaryText}
              </ListItem>
              );
    });
  }
	render() {
		return (
			<div style={styles.ChapterList}>
				<h2 style={{marginLeft: 15, textAlign:'left'}}>Chapters</h2>
				<List style={{borderBottom: '1px solid black', maxHeight: 345, overflow:'auto'}}>
					{this.generateChapterListItems()}
				</List>
			</div>
			);
	}
}

const styles = {
  ChapterList: {
    flexGrow: 2
  }
}
