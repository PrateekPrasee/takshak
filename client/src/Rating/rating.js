import React from 'react';
import ReactStars from 'react-rating-stars-component';

function Rating() {
  const ratingChanged = (rating) => {
    alert(`You have given ${rating} star rating.`);
  };

  return (
    <div className="App">
      <ReactStars
        activeColor="yellow"
        size={35}
        count={5}
        isHalf={true}
        onChange={ratingChanged}
      />
    </div>
  );
}

export default Rating;
