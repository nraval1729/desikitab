import React, { Component } from 'react';
import TopNavBar from './TopNavBar';
import ChapterList from './ChapterList';
import PlayerDisplay from './PlayerDisplay';

export default class PlayerView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currChapterIndex: 0
		};
	}

	handleChapterChange = (chapterIndex) => {
		this.setState({currChapterIndex: chapterIndex});
	}

	render() {
		return (
			<div style={styles.Player}>
				<div>
					<TopNavBar 
						bookName={this.props.currentBook.bookName}
						{...this.props}
					/>
					<ChapterList
					 onChapterChange = {this.handleChapterChange}
					 chapters={this.props.currentBook.chapters}
					/>
				</div>
				<PlayerDisplay
				 chapters = {this.props.currentBook.chapters}
				 currChapterIndex = {this.state.currChapterIndex}
				/>
			</div>
			);
	}
}

const styles = {
	Player: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%'
	}
};
