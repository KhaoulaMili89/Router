import React from "react";
import ReactStars from "react-stars";
import "../App.css";

const Rating = (props) => {
  const ratingchange = (newRating) => {
    props.handleRate(newRating);
  };
  return (
    <div className="rate">
      <ReactStars
        count={5}
        value={props.rate}
        size={20}
        onChange={ratingchange}
      ></ReactStars>
    </div>
  );
};
export default Rating;
