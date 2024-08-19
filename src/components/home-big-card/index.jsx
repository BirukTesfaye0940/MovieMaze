import React from 'react'
import { NavLink } from 'react-router-dom'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function HomeBigCard({ popular }) {
  const releaseYear = popular.release_date.split('-')[0];

  return (
    <NavLink to={`/details/movie/${popular.id}`} >
      <div className='flex flex-col bg-primary h-52 w-32 sm:h-96 sm:w-60 shadow-xl rounded-xl hover:scale-[1.01] transition-all duration-100 ease-in'>
        <div className='h-40 sm:h-80 rounded-xl'>
          {<img className='object-cover rounded-md h-full w-full' src={`${IMAGE_BASE_URL}${popular.poster_path}`} alt="poster image" />}
        </div>
        <div className='px-4 pt-1 w-full h-6'>
          <span className='text-xs text-secondary line-clamp-1  sm:text-md'>{popular.title}</span>
        </div>
        <div className='px-4 bottom-0 w-full flex h-4'>
          <span className='flex items-center text-secondary text-xs'>
            <span className='text-secondary text-xl'>&#183;</span>{releaseYear}
          </span>
        </div>
      </div>
    </NavLink>

  )
}

export default HomeBigCard
