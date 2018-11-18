import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import junior0 from '../image/junior0.png';
import junior1 from '../image/junior1.png';
import junior2 from '../image/junior2.png';
import junior3 from '../image/junior3.png';
import junior4 from '../image/junior4.png';

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        junior0,
        junior1,
        junior2,
        junior3,
        junior4,

      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>
        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
      
    );
  }
}