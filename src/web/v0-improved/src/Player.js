import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import IconButton from 'material-ui/IconButton';
import PlayCircleOutline from 'material-ui-icons/PlayCircleOutline';
import PauseCircleOutline from 'material-ui-icons/PauseCircleOutline';
import Replay30 from 'material-ui-icons/Replay30';
import Forward30 from 'material-ui-icons/Forward30';
import { LinearProgress } from 'material-ui/Progress';

export default class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      played: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currChapter.url !== '') {
      this.setState({playing: true});
    }
  }

  ref = player => {
    this.player = player
  }

  // extract played fraction from here
  onProgress = (e) => {
    this.setState({played: e["played"]});
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
      <div style={styles.Player} className = "Player">
        <ReactPlayer
          ref={this.ref}
          className = "DkPlayer"
          width = "0px"
          height = "0px"
          url = {this.props.currChapter.url}
          playing = {this.state.playing}
          config={{ file: {forceAudio: true} }}
          onProgress = {this.onProgress}
        />
        <PlayerProgress
          played = {this.state.played}
        />
        <div style={styles.ChapterInfoPlaybackWrapper} className = "ChapterInfoPlaybackWrapper">
          <PlaybackControls
            style = {styles.PlaybackControls}
            onPlayPauseButtonClick   = {this.handlePlayPauseButtonClick}
            onFastForwardButtonClick = {this.handleFastForwardButtonClick}
            onReplayButtonClick      = {this.handleReplayButtonClick}
            showPlayButton           = {!this.state.playing}
          />
          <CurrChapterInfo
            style = {styles.CurrChapterInfo}
            chapter = {this.props.currChapter.chapterName}
          />
        </div>
      </div>
    );
	}
}

export class PlaybackControls extends Component {
  render() {

    const FastForwardButton = <IconButton  onClick={this.props.onFastForwardButtonClick}>
                                <Forward30/>
                              </IconButton>

    const ReplayButton      = <IconButton  onClick={this.props.onReplayButtonClick}>
                                <Replay30/>
                              </IconButton>

    const PlayButton        = <IconButton onClick={this.props.onPlayPauseButtonClick}>
                                <PlayCircleOutline/>
                              </IconButton>;

    const PauseButton = <IconButton onClick={this.props.onPlayPauseButtonClick}><PauseCircleOutline/></IconButton>;

    const PlayPauseButton = this.props.showPlayButton ? PlayButton : PauseButton;

    return (
      <div 
        className = "PlaybackControls"
      >
        {ReplayButton}
        {PlayPauseButton}
        {FastForwardButton}
      </div>
    );
  }
}

export class CurrChapterInfo extends Component {
  render() {
    return (
      <div className = "CurrChapterInfo">
        {this.props.chapter}
      </div>
    );
  }
}

export class PlayerProgress extends Component {
  render() {
    return (
      <div className="PlayerProgess">
        <LinearProgress variant="determinate" value={this.props.played*100} />
      </div>
    );
  }
}

const styles = {
  Player: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ChapterInfoPlaybackWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PlaybackControls: {
  },
  CurrChapterInfo: {
    alignSelf: 'flex-start'
  }
}
