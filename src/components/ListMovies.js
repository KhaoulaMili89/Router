import React from "react-bootstrap";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";

const ListMovies = (props) => {
  return (
    <div className="ListMovies">
      
      {props.movies.map((el) => (
        <div className="movie">
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src={el.Poster} width="400" height="400" />
            <Card.Body>
              <Card.Title className="T">{el.Title}</Card.Title>
              <StarRatingComponent value={+el.Rating} />
              <p>
                {/* <Card.Text className="Desc" >{el.Description}</Card.Text> */}
                <Link to={`/Description/${el.id}`}>
                  {" "}
                  <button>Description</button>
                </Link>
              </p>
            </Card.Body>
          </Card>
        </div>
      ))}
     
    </div>
  );
};
export default ListMovies;
