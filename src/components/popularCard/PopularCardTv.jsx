import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';
import {NavLink} from 'react-router-dom'


function PopularCardTv({trending}) {
  const releaseYear = trending?.release_date?.split('-')[0] || trending?.first_air_date?.split('-')[0];
  return (
    <NavLink to={`/details/tv/${trending.id}`} >
      <div className='flex flex-col bg-primary h-auto w-[185px] shadow-xl rounded-xl hover:scale-[1.01] transition-all duration-100 ease-in m-2'>
        <div className='rounded-xl'>
          {<img className='object-cover rounded-md h-[278px] w-full' src={`${IMAGE_BASE_URL}${trending.poster_path}`} alt="poster image" />}
        </div>
        <div className='px-4 pt-1 w-full h-6'>
          <span className=' text-secondary line-clamp-1  text-sm'>{trending.title || trending.name}</span>
        </div>
        <div className='px-4 bottom-0 w-full flex'>
          <span className='flex items-center text-secondary text-xs'>
            <span className='text-secondary text-xl'>&#183;</span>{releaseYear}
          </span>
        </div>
      </div>
    </NavLink>
  )
}
export default PopularCardTv
