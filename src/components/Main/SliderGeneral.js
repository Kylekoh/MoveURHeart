import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import adult1 from '../image/adult1.png';
import adult2 from '../image/adult2.png';
import adult3 from '../image/adult3.jpeg';
import adult4 from '../image/adult4.jpeg';
import adult5 from '../image/adult5.jpeg';
import adult6 from '../image/adult6.jpeg';

export default class SliderGeneral extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        adult1,
        adult2,
        adult3,
        adult4,
        adult5,
        adult6
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
    console.log(this.state.currentIndex);
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
                <Slide key={i} image={image} alt="일반인 활동 사진"/>
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