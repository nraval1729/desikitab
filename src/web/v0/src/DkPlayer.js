import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import IconButton from 'material-ui/IconButton';
import PlayCircleOutline from 'material-ui-icons/PlayCircleOutline';
import PauseCircleOutline from 'material-ui-icons/PauseCircleOutline';
import Replay30 from 'material-ui-icons/Replay30';
import Forward30 from 'material-ui-icons/Forward30';
import { LinearProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import './DkPlayer.css';

export default class DkPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      played: 0,
      showPlayButton: true
    }
  }

  ref = player => {
    this.player = player
  }

  // extract played fraction from here
  onProgress = (e) => {
    this.setState({played: e["played"]});
  }

  handlePlayButtonClick = () => {
    this.setState({playing: true, showPlayButton: false})
  }

  handlePauseButtonClick = () => {
    this.setState({playing: false, showPlayButton: true});
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
    const visibility = this.props.url === '' ? 'hidden' : 'visible';
		return (
		  <Paper 
        className="DkPlayerWrapper"
        style = {{visibility: visibility}}
        elevation = {5}
      >
        <ReactPlayer
          ref={this.ref}
          className = "DkPlayer"
          url = {this.props.url}
          playing = {this.state.playing}
          width='100%'
          height='100%'
          config={{ file: {forceAudio: true} }}
          onProgress = {this.onProgress}
        />
        <PlayerProgress
          played = {this.state.played}
        />
        <PlaybackControls
          onPlayButtonClick        = {this.handlePlayButtonClick}
          onPauseButtonClick       = {this.handlePauseButtonClick}
          onFastForwardButtonClick = {this.handleFastForwardButtonClick}
          onReplayButtonClick      = {this.handleReplayButtonClick}
          showPlayButton           = {this.state.showPlayButton}
        />
      </Paper>
		);
	}
}

export class PlaybackControls extends Component {
  render() {
    const buttonStyle = {fontSize: '40px', margin: '1%'};

    const FastForwardButton = <IconButton style={buttonStyle} onClick={this.props.onFastForwardButtonClick}>
                                <Forward30/>
                              </IconButton>

    const ReplayButton      = <IconButton style={buttonStyle} onClick={this.props.onReplayButtonClick}>
                                <Replay30/>
                              </IconButton>

    const PlayButton        = <IconButton style={buttonStyle} onClick={this.props.onPlayButtonClick}>
                                <PlayCircleOutline/>
                              </IconButton>;

    const PauseButton = <IconButton style={buttonStyle} onClick={this.props.onPauseButtonClick}><PauseCircleOutline/></IconButton>;

    const PlayPauseButton = this.props.showPlayButton ? PlayButton : PauseButton;

    return (
      <div className = "PlaybackControls">
        {ReplayButton}
        {PlayPauseButton}
        {FastForwardButton}
      </div>
    );
  }
}

export class PlayerProgress extends Component {
  render() {
    return (
      <div className="PlayerProgess">
        <LinearProgress style = {{fontSize: '40px'}}variant="determinate" value={this.props.played*100} />
      </div>
    );
  }
}
