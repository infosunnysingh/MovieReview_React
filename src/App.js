
import './App.css';
import React  from 'react'
import {BrowserRouter as Router, Routes,Route, RouterProvider} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie';
function App() {
  return (
    <div className="App">
      <Router>=
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          {/* <Route index element={<h1>Hello World</h1>}></Route> */}
          <Route path='movie/:id' style={{textdecoration: "none"}} element={<Movie/>}></Route>
          <Route path='movies/:type' style={{textdecoration: "none"}}element={<MovieList/>}></Route>
          <Route path='/*' style={{textdecoration: "none"}} element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
