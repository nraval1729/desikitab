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
			currUrl: ''
		}
	}

	ref = player => {
    this.player = player
  }

  // extract played fraction from here
  onProgress = (e) => {
    this.setState({played: e["played"]});
  }

  onEnded = (e) => {
  	this.setState({currUrl: this.props.nowPlaying.nextUrl});
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
		return (
			<div style={styles.PlayerDisplay}>
				<div style={styles.NowPlaying}>
					{this.props.nowPlaying.name}
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
          url = {this.props.nowPlaying.url}
          playing = {this.state.playing}
          config={{ file: {forceAudio: true} }}
          onProgress = {this.onProgress}
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
		justifyContent: 'space-between'
	},
	NowPlaying: {
		margin: 20
	},
	Controls: {
		alignSelf: 'flex-start',
		margin: 15
	},
	ControlIcon: {
		fontSize: 36
	}
}
