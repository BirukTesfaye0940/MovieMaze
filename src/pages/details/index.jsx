import React from 'react';
import { GlobalContext } from '../../context';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';

const API_KEY = 'cd133ea3b6afe0e0f42c62d64a2e23ce';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

function Details() {
  const { type, id } = useParams();
  const { detailData, setDetailData, watchlist, handleAddToWatchlist } = useContext(GlobalContext);


  useEffect(() => {
    async function getMovieDetails() {
      const url = `${BASE_URL}/${type}/${id}?api_key=${API_KEY}`;
      try {
        const response = await fetch(`${url}`);
        const data = await response.json();

        if (data) {
          setDetailData(data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getMovieDetails();
  }, [type, id, setDetailData]);

  if (!detailData) return <div>Loading...</div>;

  const releaseYear = detailData?.release_date?.split('-')[0] || detailData?.first_air_date?.split('-')[0];
  const genres = detailData?.genres?.map(genre => genre.name);

  return (
    <div className='bg-primary md:px-20 rounded-sm flex flex-col min-h-lvh'>
      <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-1 m-4 pb-2 pr-1 rounded-md border-y-2'>
        <div className='flex items-start'>
          <img className='rounded-b-lg rounded-tl-lg' src={`${IMAGE_BASE_URL}${detailData?.poster_path}`} alt={detailData?.title || detailData?.name} />
        </div>
        <div className='col-span-2 lg:col-span-3'>
          <div>
            <span className='text-secondary px-1 lg:text-lg'>Title:</span>
            <span className='text-tertiary font-medium text-sm lg:text-lg xl:text-xl'>{detailData?.title || detailData?.name}</span>
          </div>
          <div>
            <div>
              <span className='text-secondary px-1 lg:text-lg'>Year:</span>
              <span className='text-tertiary font-medium text-sm lg:text-lg xl:text-xl'>{releaseYear}</span>
            </div>
            <div className='flex'>
              <span className='text-secondary px-1 lg:text-lg'>{genres.length > 1 ? 'Genres: ' : 'Genre '} </span>
              <span>
                {genres?.map((genre, index) => (
                  <span className='text-tertiary font-medium text-sm lg:text-lg xl:text-xl' key={index}>{genre}{index === genres.length - 1 ? '' : ', '}</span>
                ))}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleAddToWatchlist(detailData)}
            className='text-primary border-2 cursor-pointer hover:scale-[1.02] transition-all border-solid border-primary rounded-full px-4 py-1 m-2 bg-yellow-300 hover:bg-secondary flex items-center gap-2 font-semibold text-md lg:text-lg xl:text-xl font-pacifico'
          >
            Watchlist {watchlist && watchlist.findIndex(film => film.id === detailData?.id) !== -1 ? <FaMinus className='h-4' /> : <FaPlus className='h-3' />}
          </button>
          <div>
            <h2 className='text-secondary px-1 lg:text-lg xl:text-xl'>Overview</h2>
            <span className='text-tertiary font-medium text-sm lg:text-lg xl:text-xl'>{detailData?.overview}</span>
          </div>
        </div>
      </div>
      <div className='px-5 grid grid-cols-2'>
        <div>
          <span className='text-secondary text-sm font-poppins lg:text-lg'>Run time:</span>
          <span className='text-tertiary font-medium text-sm lg:text-lg xl:text-xl'>{detailData?.runtime || detailData?.episode_run_time} min</span>
        </div>
        <div>
          <p className='text-tertiary text-sm lg:text-lg xl:text-xl'>
            <span className='text-secondary font-poppins'>Languages:</span> {detailData?.spoken_languages.map(lang => lang.name).join(', ')}
          </p>
        </div>
        <div>
          <p className='text-secondary font-poppins text-sm lg:text-lg xl:text-xl'>
            Original Language: <span className='text-tertiary'>{detailData?.original_language}</span>
          </p>
        </div>
        <div>
          {detailData?.number_of_seasons && (
            <span className='text-secondary text-sm font-poppins lg:text-lg xl:text-xl'>
              Seasons: <span className='text-tertiary'>{detailData.number_of_seasons}</span>
            </span>
          )}
        </div>
        <div>
          {detailData?.number_of_episodes && (
            <span className='text-secondary font-poppins lg:text-lg xl:text-xl'>
              Episodes: <span className='text-tertiary'>{detailData?.number_of_episodes}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
