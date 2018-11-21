import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import junior1 from '../image/junior1.jpeg';
import junior2 from '../image/junior2.jpeg';
import junior3 from '../image/junior3.jpeg';
import junior4 from '../image/junior4.jpeg';
import junior5 from '../image/junior5.jpeg';
import junior6 from '../image/junior6.jpeg';
import junior7 from '../image/junior7.jpeg';
import junior8 from '../image/junior8.jpeg';

export default class SliderJunior extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        junior1,
        junior2,
        junior3,
        junior4,
        junior5,
        junior6,
        junior7,
        junior8,

      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex >= 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + (this.slideWidth())
      }));
    }
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

  render(props) {

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