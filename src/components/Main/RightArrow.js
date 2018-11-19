import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="rightArrow" onClick={props.goToNextSlide}>
      <i className="fas fa-angle-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;
