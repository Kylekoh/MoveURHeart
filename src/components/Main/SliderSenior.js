import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import senior1 from '../image/senior1.png';
import senior2 from '../image/senior2.png';
import senior3 from '../image/senior3.png';


export default class SliderSenior extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        senior1,
        senior2,
        senior3
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