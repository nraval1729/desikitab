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
                onClick = {() => this.props.onChapterChange(chapter)}
              >
                {primaryText}
              </ListItem>
              );
    });
  }
	render() {
		return (
			<div>
				<h2 style={{marginLeft: 15, textAlign:'left'}}>Chapters</h2>
				<List style={{borderBottom: '1px solid black', maxHeight: 325, overflow:'auto'}}>
					{this.generateChapterListItems()}
				</List>
			</div>
			);
	}
}
