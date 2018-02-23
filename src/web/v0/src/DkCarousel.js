import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import CarouselItem from './CarouselItem';
import './DkCarousel.css';

export default class DkCarousel extends Component {

  constructor(props) {
    super(props);

    this.itemIndexToUrl = {};
  }

  shouldComponentUpdate() {
    return false;
  }

  // If we follow up the trail to see the implementation of
  // handleCurrentUrlChange, we know that we are invoking
  // setState there and this rerenders the Carousel, and 
  // hence sets the selectedItem -> 0 by default. To prevent
  // this we are also storing the selectedItem's index, and
  // passing it as a prop to Carousel
  // Alternatively, we return false from shouldComponentUpdate
  handleItemClick = (i) => {
    this.props.onCurrentUrlChange(this.itemIndexToUrl[i]);
  }

  generateSlides = () => {
    const metadata = this.props.metadata;
    const slides = metadata.map((item, index) => {

      // populate the itemIndexToUrl object
      this.itemIndexToUrl[index] = item.url;

      return (
        <div key = {item.url}>
          <CarouselItem
            author             = {item.author}
            narrator           = {item.narrator}
            name               = {item.name}
            url                = {item.url}
         />
        </div>
      )
    });
    return slides;
  }

  render() {
    const carouselSettings = {
        infiniteLoop   : true,
        showArrows     : false,
        autoPlay       : true,
        interval       : 5000,
        showStatus     : false,
        showThumbs     : false,
        showIndicators : false,
        onClickItem    : this.handleItemClick
    }
      return (
        <div className="Carousel">
          <Carousel {...carouselSettings}>
            {this.generateSlides()}
          </Carousel>
        </div>
      );
  }
}
