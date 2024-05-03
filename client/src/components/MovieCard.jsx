import React from 'react'
import {Movie_Poster_URL} from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr'>
        <img src={`${Movie_Poster_URL}/${posterPath}`} alt="movie-poster" />
    </div>
  )
}

export default MovieCard