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
			<div style={styles.PlayerView}>
				<TopNavBar 
						bookName={this.props.currentBook.bookName}
						{...this.props}
				/>
				<div>
					<ChapterList
					 onChapterChange = {this.handleChapterChange}
					 chapters={this.props.currentBook.chapters}
					/>
					<PlayerDisplay
					 baseStreamingUrl = {this.props.currentBook.baseStreamingUrl}
					 chapters = {this.props.currentBook.chapters}
					 currChapterIndex = {this.state.currChapterIndex}
					 bookName = {this.props.currentBook.bookName}
					/>
				</div>
			</div>
			);
	}
}

const styles = {
	PlayerView: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100%'
	}
};
