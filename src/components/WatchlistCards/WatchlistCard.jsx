import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context';
import { FaPlus, FaMinus } from 'react-icons/fa';


const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';



function WatchlistCard({ trending }) {
  const { handleAddToWatchlist, watchlist } = useContext(GlobalContext);

  return (
    <div className='flex flex-col bg-primary h-auto w-[185px] shadow-xl rounded-xl hover:scale-[1.01] transition-all duration-100 ease-in'>
      <NavLink to={`/details/movie/${trending.id}`} >
        <div >
          <div className='rounded-xl'>
            {<img className='object-cover rounded-md h-[278px] w-full' src={`${IMAGE_BASE_URL}${trending.poster_path}`} alt="poster image" />}
          </div>
          <div className='px-4 pt-1 w-full h-6'>
            <span className=' text-secondary line-clamp-1  text-sm'>{trending.title || trending.name}</span>
          </div>

        </div>
      </NavLink>
      <div>
        <button onClick={() => handleAddToWatchlist(trending)} className='text-primary border-2 cursor-pointer hover:scale-[1.02] transition-all border-solid border-primary rounded-full px-4 py-1 m-2 bg-yellow-300 hover:bg-secondary flex items-center gap-2 font-semibold text-sm font-pacifico'>Watchlist {
          watchlist && watchlist.length && watchlist.findIndex(film => film.id === trending?.id) !== -1 ? <FaMinus className='h-4' /> : <FaPlus className='h-3' />
        }</button>
      </div>
    </div>

  )
}

export default WatchlistCard