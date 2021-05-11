import "./App.css";
import React, { useState } from "react";
/* import AddModals from "./components/AddModals"; 
 */import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import ListMovies from "./components/ListMovies";
import Rating from "./components/Rating";
import Filter from "./components/Filtrer";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Description from "./Description";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      Title: "Joker",
      Description:
        "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      Poster:
        "https://images-na.ssl-images-amazon.com/images/I/61BGvE8DumL._AC_SL1191_.jpg",
      Rating: 3,
      trailer: "https://www.youtube.com/watch?v=OoTx1cYC5u8",
    },
    {
      id: uuidv4(),
      Title: "The stoning of Souraya M",
      Description:
        "Soraya, a courageous Iranian woman, very quickly realizes that the arranged marriage of which she is the victim is a failure and that she is ruining her life. Her husband then decides to organize a plot, and accuses her of adultery, thus condemning her to an incredibly cruel sentence, stoning.",
      Poster:
        "https://cumamcs.files.wordpress.com/2013/02/group-5-poster-copy.jpg",
      Rating: 5,
      trailer: "https://www.youtube.com/watch?v=2sFvIBAcN3c",
    },
    {
      id: uuidv4(),
      Title: "The man who sold his skin",
      Description:
        "Sam Ali, a sensitive and impulsive young Syrian, flees his country for Lebanon in order to escape the war. To travel to Europe and live with the love of his life. By transforming her body into a prestigious work of art, however, Sam will eventually discover that her decision came at the cost of her freedom.",
      Poster: "https://i.ytimg.com/vi/RtM8tSJF7JY/movieposter.jpg",
      Rating: 4,
      trailer: "https://www.youtube.com/watch?v=cY4THtbaklE",
    },
  ]);
 /*  const add = (newMovie) => {
    setMovies(movies.concat(newMovie));
  };  */
  const [filterText, setFilterText] = useState("");

  const Filterhandle = (filterText) => {
    setFilterText(filterText);
  };

  const [rate, setRating] = useState("");

  const FilterRatinghandle = (rate) => {
    setRating(rate);
  };
  return (
    <div className="App">
      <BrowserRouter>
      
        <div className="SearchZone">
          <h2>Search Movies</h2>
          <Filter FilterTool={Filterhandle} />
          <Rating
            handleRate={FilterRatinghandle}
            rate={rate}
            setrate={setRating}
          ></Rating>
        </div>
        <div>
          <ListMovies
            movies={movies.filter(
              (movie) =>
                movie.Title.toLowerCase().includes(
                  filterText.toLowerCase().trim()
                ) && movie.Rating >= rate
            )}
          />
        </div>
        <br></br>
         {/* <AddModals addMovies={add} />  */}

        <Route
          exact
          path="/Description/:id"
          render={(props) => <Description {...props} movies={movies} />}
        />
             <Link to="/">
          {" "}
          <button className="ButtonH">Home</button>
        </Link>   
      </BrowserRouter>
    </div>
  );
};

export default App;
