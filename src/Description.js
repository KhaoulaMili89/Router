import React, { useState, useEffect } from "react";
import "./App.css";

const Description = (props) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setMovie(props.movies.filter((el) => el.id === props.match.params.id)[0]);
  });
  return (
    <div>
      {movie && (
        <p>
          {movie.Description}

          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
       
        
      </p>
      )}
       
    </div>
  );
};

export default Description;
