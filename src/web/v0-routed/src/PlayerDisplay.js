import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { LinearProgress } from 'material-ui/Progress';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

export default class PlayerDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playing: false,
			played: 0,
			chapters: this.props.chapters,
			currChapterIndex: this.props.currChapterIndex
		}
	}

// Happens when PlayerView rerenders PlayerDisplay
// because the user clicked on a particular chapter
// from the ChapterList. In this case we update the 
// state to reflect the new currChapterIndex
	componentWillReceiveProps(nextProps) {
		this.setState({
			currChapterIndex: nextProps.currChapterIndex
		})
	}

	ref = player => {
    this.player = player
  }

  // extract played fraction from here
  onProgress = (e) => {
    this.setState({played: e["played"]});
  }

  onEnded = (e) => {
  	// setState after at least 2 seconds to prevent
  	// rapid fire audio lol
  	setTimeout(() => {this.setState((prevState) => {
  		// If the previous chapter was NOT the last chapter in this book
  		// we will increment the currChapterIndex
  		if(prevState.currChapterIndex !== prevState.chapters.length-1)
  			return {currChapterIndex: prevState.currChapterIndex+1};
  	})}, 2000);
  }

  handlePlayPauseButtonClick = () => {
    this.setState((prevState) => {
      return {playing: !prevState.playing};
    });
  }

  // FastForward by 30 secs
  handleFastForwardButtonClick = () => {
    this.player.seekTo(this.player.getCurrentTime() + 30);
  }

  // Replay by 30 secs
  handleReplayButtonClick = () => {
    this.player.seekTo(this.player.getCurrentTime() - 30);
  }

	render() {
		const fullUrl = this.props.baseStreamingUrl + this.state.chapters[this.state.currChapterIndex].url;
		return (
			<div style={styles.PlayerDisplay}>
				<div style={styles.NowPlaying}>
					{this.state.chapters[this.state.currChapterIndex].name}
				</div>
				<Progress played={this.state.played}/>
				<Controls
				  onPlayPauseButtonClick   = {this.handlePlayPauseButtonClick}
          onFastForwardButtonClick = {this.handleFastForwardButtonClick}
          onReplayButtonClick      = {this.handleReplayButtonClick}
          showPlayButton           = {!this.state.playing}
				/>
				<ReactPlayer
          ref={this.ref}
          width = "0px"
          height = "0px"
          // the url of the chapter at the currChapterIndex
          url = {fullUrl}
          playing = {this.state.playing}
          config={{ file: {forceAudio: true} }}
          onProgress = {this.onProgress}
          onEnded    = {this.onEnded}
        />
			</div>
		);
	}
}

export class Progress extends Component {
	render() {
		return (
			<div>
				<LinearProgress variant="determinate" value={this.props.played*100}/>
			</div>
		);
	}
}

export class Controls extends Component {
	render() {
		const ReplayButton =  <Button onClick={this.props.onReplayButtonClick}><Icon style={styles.ControlIcon}>replay_30</Icon></Button>;

		const PlayButton = <Button onClick={this.props.onPlayPauseButtonClick}><Icon style={styles.ControlIcon}>play_arrow</Icon></Button>;

		const PauseButton = <Button onClick={this.props.onPlayPauseButtonClick}><Icon style={styles.ControlIcon}>pause</Icon></Button>;

		const ForwardButton = <Button onClick={this.props.onFastForwardButtonClick}><Icon style={styles.ControlIcon}>forward_30</Icon></Button>;

    const PlayPauseButton = this.props.showPlayButton ? PlayButton : PauseButton;

		return (
			<div style={styles.Controls}>
				{ReplayButton}
				{PlayPauseButton}
				{ForwardButton}
			</div>
			);
	}
}

const styles = {
	PlayerDisplay: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',

	},
	NowPlaying: {
		margin: 10
	},
	Controls: {
		alignSelf: 'flex-start',
		margin: 15,
		flex: '1 1 0'
	},
	ControlIcon: {
		fontSize: 36
	}
}
