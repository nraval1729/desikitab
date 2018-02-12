import React, { Component } from 'react';
import Center from 'react-center';
import './DesiKitab.css';
import DkCarousel from './DkCarousel';
// import DkPlayer from './DkPlayer';
import metadata from './Metadata';

export default class DesiKitab extends Component {
	constructor(props) {
    super(props);

    this.state = {currentUrl: ''};
  }

  handleCurrentUrlChange = (currentUrl) => {
    this.setState({
      currentUrl: currentUrl
    });
  }

  render() {
    return (
        <div className="DesiKitab">
          <Center>
            <DkCarousel
              metadata           = {metadata}
              onCurrentUrlChange = {this.handleCurrentUrlChange}
            />
            </Center>
        </div>
    )
  }
}
