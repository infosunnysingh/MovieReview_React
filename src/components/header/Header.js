import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
export default function Header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className='header__icon' alt=''/></Link>
            <Link to="/movies/popular"><img src="" className='header__icon' alt='' /><span>Popular</span></Link>
            <Link to="/movies/top_rated"><img src="" className='header__icon' alt='' /><span>Top Rated</span></Link>
            <Link to="/movies/upcoming"><img src="" className='header__icon' alt='' /><span>Upcoming</span></Link>
        </div>
    </div>
  )
}
