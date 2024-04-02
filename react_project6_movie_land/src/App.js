import { useEffect, useState, useSyncExternalStore } from 'react';
import React from 'react';
import './App.css'
import Searchicon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = "http://www.omdbapi.com?apikey=54498b92"

//54498b92

// const movie1 = {
//    "Title": "Batman v Superman: Dawn of Justice",
//    "Year": "2016",
//    "imdbID": "tt2975590",
//    "Type": "movie",
//    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

const App = () => {

   const [movies, setMovies] = useState([]);

   const [searchTerm, setSearchTerm] = useState("")

   const searchmovies = async (title) => {
      const responce = await fetch(`${API_URL}&s=${title}`);
      const data = await responce.json();

      setMovies(data.Search)
   }

   useEffect(() => {

      searchmovies("superman")

   },
      [])

   return (
      <div className='app'>
         <h1>MovieLand</h1>
         <div className='search'>
            <input
               placeholder='Search for Movies'
               value={searchTerm}
               onChange={(e) => setSearchTerm   (e.target.value)}
            ></input>

            <img src={Searchicon}
               alt="img"
               onClick={() => searchmovies(searchTerm)}
            />
         </div>

         {
            movies?.length > 0
               ? (
                  <div className='container'>
                     {movies.map((movie) => (
                        <MovieCard movie={movie} />
                     ))}
                  </div>
               ) : (
                  <div className='empty'>
                     <h1>No movies found</h1>
                  </div>
               )

         }

      </div>

   );
}

export default App