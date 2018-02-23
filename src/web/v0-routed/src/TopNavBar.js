import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import KeyboardBackspace from 'material-ui-icons/KeyboardBackspace';
import Typography from 'material-ui/Typography';

export default class TopNavBar extends Component {

// Force navigation back to main screen
	handleBackButtonClick = () => {
		this.props.history.push("/");
	}
	render() {
		return (
			<AppBar position="static" color="primary">
        <Toolbar>
          <IconButton onClick={this.handleBackButtonClick} color="inherit" aria-label="Menu">
              <KeyboardBackspace />
           </IconButton>
          <Typography variant="title" color="inherit">
            {this.props.bookName}
          </Typography>
        </Toolbar>
      </AppBar>
		);
	}
}
