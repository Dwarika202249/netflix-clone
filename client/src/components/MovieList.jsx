import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    // console.log(movies[0]);
    
  return (
    <div className='px-8'>
        <h1 className='text-3xl p-4 text-white'>{title}</h1>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
            <div className='flex items-center gap-4'>
                
                {
                    movies.map((movie) => {
                        return(
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default MovieList