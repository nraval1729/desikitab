import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Desikitab from './Desikitab';
import PlayerView from './PlayerView';

// This is a wrapper to conditionally route
// between player view v/s desikitab view
export default class DesikitabWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBook: {}
		}
	}

	handlePlayClick = (book) => {
		this.setState({currentBook: book});
	}
	
	render() {
		return (
			<Switch>
				<Route
				  path="/player"
				  render = {(props) => <PlayerView currentBook={this.state.currentBook} {...props}/>}
				/>
				<Route
					path="/"
					render={(props) => <Desikitab onPlayClick={this.handlePlayClick} {...props}/>}/>
			</Switch>
		);
	}
}
