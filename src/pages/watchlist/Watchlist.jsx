import {useEffect} from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../../context';
import WatchlistCard from '../../components/WatchlistCards/WatchlistCard';
import WatchlistCardTv from '../../components/WatchlistCards/WatchlistCardTv';
import useStorage from '../../util/useStorage';


function Watchlist() {
  const { watchlist, setWatchlist } = useContext(GlobalContext);
  const [storedValue, setValue] = useStorage('watchlist', []);

  useEffect(() => {
    if (storedValue && Array.isArray(storedValue)) {
      setWatchlist(storedValue);
    }
  }, [storedValue]);
  return (
    <div className='relative'>
      <div className='fixed z-40 w-full bg-white opacity-[90%] bg-blur-sm'>
        <p className='font-pacifico text-center text-xl pt-2 border-b-2 border-gray-300 rounded-xl shadow-lg  text-primary'>
          Watchlist
        </p>
      </div>
      
      <div className='grid gap-2 sm:grid-cols-2 sm:pl-10 md:grid-cols-3 lg:grid-cols-5 p-5 pt-12'>
        {
          watchlist && watchlist.length > 0 ? watchlist.map(film => (film?.seasons ? <WatchlistCardTv key={film.id} trending={film} /> : <WatchlistCard key={film.id} trending={film} />)) : 
            <span className='text-sm sm:text-lg md:text-2xl text-primary font-poppins text-nowrap'>
            Add movies to the watchlist</span>
        }
      </div>
    </div>
  )
}

export default Watchlist
