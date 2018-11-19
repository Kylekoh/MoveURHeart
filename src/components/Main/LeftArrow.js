import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="leftArrow" onClick={props.goToPrevSlide}>
     <i className="fas fa-angle-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;