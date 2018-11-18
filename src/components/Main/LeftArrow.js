import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="leftArrow" onClick={props.goToPrevSlide}>
     <i class="fas fa-angle-left fa-2x"></i>
    </div>
  );
}

export default LeftArrow;