import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './CarouselItem.css';

export default class CarouselItem extends Component {
  render() {
    const {name, author, narrator} = this.props; 
    return (
      <Paper className="CarouselItem" elevation={5}>
          <div>
            <h1>{name}</h1>
            <h2>{author}</h2>
            <h3>{narrator}</h3>
          </div>
      </Paper>
    );
  }
}
