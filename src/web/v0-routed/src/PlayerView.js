import React, { Component } from 'react';
import TopNavBar from './TopNavBar';
import ChapterList from './ChapterList';
import PlayerDisplay from './PlayerDisplay';

export default class PlayerView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currChapter: {
				name: "Now playing",
				url: "",
				nextUrl: ""
			}
		};
	}

	handleChapterChange = (chapter) => {
		this.setState({currChapter: chapter});
	}

	render() {
		return (
			<div style={styles.Player}>
				<div>
					<TopNavBar bookName={this.props.currentBook.bookName} {...this.props}/>
					<ChapterList onChapterChange = {this.handleChapterChange} chapters={this.props.currentBook.chapters}/>
				</div>
				<PlayerDisplay nowPlaying = {this.state.currChapter}/>
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
