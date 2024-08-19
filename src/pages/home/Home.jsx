import { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../context';
import HomeBigCard from '../../components/home-big-card';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import MainCard from '../../components/main-card/MainCard';
import MainCardTv from '../../components/main-card/mainCardTv';

const screenWidth = (window.innerWidth) - 50;

function Home() {
  const { 
    searchResults, 
    loading, setLoading,
    showSearchResults, setShowSearchResults,
    popularMoviesList, 
    trendingMoviesList, 
    PopularTvshowsList, 
    trendingTvshowsList, 
    latestMovies, latestTvShows,
    getPopularMovies, getTrendingMovies, getPopularTvshows, getTrendingTvshows, getLatestMovies,
    getLatestTvshows
   } = useContext(GlobalContext);

  const elementRef = useRef(null);
  const smallElementRef= useRef(null);
  const smallElementRef2= useRef(null);
  const smallElementRef3= useRef(null);
  const smallElementRef4= useRef(null);
  const smallElementRef5= useRef(null);

  function closeModal() {
    setShowSearchResults(false);
  }

  useEffect(() => {
    getPopularMovies();
    getTrendingMovies();
    getPopularTvshows();
    getTrendingTvshows();
    getLatestMovies();
    getLatestTvshows();
  }, []);

  const scrollLeft = (element) => {
    element.scrollLeft -= screenWidth
  };

  const scrollRight = (element) => {
    element.scrollLeft += screenWidth
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='relative mx-4 p-3'>
        <FaChevronLeft 
          className='hidden sm:block absolute left-[-6px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-700 pr-3'
          onClick={() => scrollLeft(elementRef.current)}
        />
        <div 
          className='relative flex gap-5 overflow-x-auto scrollbar-hide p-4 scroll-smooth'
          ref={elementRef}
        >
          {popularMoviesList && popularMoviesList.length ? 
            popularMoviesList.map((popular) => (
              <HomeBigCard key={popular.id} popular={popular} />
            )) 
            : null 
          }
        </div>
        <FaChevronRight 
          className='hidden sm:block absolute right-[-6px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-700 pl-3'
          onClick={() => scrollRight(elementRef.current)}
        />
      </div>
      <div className='flex justify-center'>
        <h1 className='mojo text-primary text-xl md:text-3xl'>Scout your screen gems</h1>
      </div>
      <div className='mx-4 p-3 relative'>
        <div>
          <span className='text-primary text-lg md:text-2xl'>Trending Movies</span>
        </div>
        <FaChevronLeft 
            className='hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
            onClick={() => scrollLeft(smallElementRef.current)}
          />

        <div 
          className='relative flex gap-5 overflow-x-auto scrollbar-hide p-4 scroll-smooth'
          ref={smallElementRef}
        >
          {trendingMoviesList && trendingMoviesList.length ? 
            trendingMoviesList.map((trending) => (
              <MainCard key={trending.id} trending={trending} />
            )) 
            : null 
          }
        </div>

          <FaChevronRight 
          className='hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
          onClick={() => scrollRight(smallElementRef.current)}
        />
      </div>
      <div className='mx-4 p-3 relative'>
        <div>
          <span className='text-primary text-lg md:text-2xl'>Popular Tvshows</span>
        </div>
        <FaChevronLeft 
            className='hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
            onClick={() => scrollLeft(smallElementRef2.current)}
          />

        <div 
          className='relative flex gap-5 overflow-x-auto scrollbar-hide p-4 scroll-smooth'
          ref={smallElementRef2}
        >
          {PopularTvshowsList && PopularTvshowsList.length ? 
            PopularTvshowsList.map((trending) => (
              <MainCardTv key={trending.id} trending={trending} />
            )) 
            : null 
          }
        </div>

          <FaChevronRight 
          className='hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
          onClick={() => scrollRight(smallElementRef2.current)}
        />
      </div>
      <div className='mx-4 p-3 relative'>
        <div>
          <span className='text-primary text-lg md:text-2xl'>Trending Tvshows</span>
        </div>
        <FaChevronLeft 
            className='hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
            onClick={() => scrollLeft(smallElementRef3.current)}
          />

        <div 
          className='relative flex gap-5 overflow-x-auto scrollbar-hide p-4 scroll-smooth'
          ref={smallElementRef3}
        >
          {trendingTvshowsList && trendingTvshowsList.length ? 
            trendingTvshowsList.map((trending) => (
              <MainCardTv key={trending.id} trending={trending} />
            )) 
            : null 
          }
        </div>

          <FaChevronRight 
          className='hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
          onClick={() => scrollRight(smallElementRef3.current)}
        />
      </div>
      <div className='mx-4 p-3 relative'>
        <div>
          <span className='text-primary text-lg md:text-2xl'>Latest released movies</span>
        </div>
        <FaChevronLeft 
            className='hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
            onClick={() => scrollLeft(smallElementRef4.current)}
          />

        <div 
          className='relative flex gap-5 overflow-x-auto scrollbar-hide p-4 scroll-smooth'
          ref={smallElementRef4}
        >
          {latestMovies && latestMovies.length ? 
            latestMovies.map((trending) => (
              <MainCard key={trending.id} trending={trending} />
            )) 
            : null 
          }
        </div>

          <FaChevronRight 
          className='hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
          onClick={() => scrollRight(smallElementRef4.current)}
        />
      </div>
      <div className='mx-4 p-3 relative'>
        <div>
          <span className='text-primary text-lg md:text-2xl'>Latest released Tvshows</span>
        </div>
        <FaChevronLeft 
            className='hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
            onClick={() => scrollLeft(smallElementRef5.current)}
          />

        <div 
          className='relative flex gap-5 overflow-x-auto scrollbar-hide p-4 scroll-smooth'
          ref={smallElementRef5}
        >
          {latestTvShows && latestTvShows.length ? 
            latestTvShows.map((trending) => (
              <MainCardTv key={trending.id} trending={trending} />
            )) 
            : null 
          }
        </div>

          <FaChevronRight 
          className='hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-lg text-gray-700'
          onClick={() => scrollRight(smallElementRef5.current)}
        />
      </div>
      {showSearchResults && (
        <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg relative w-3/4 max-w-xl">
            <button 
              onClick={closeModal} 
              className="absolute top-1 right-8 text-4xl text-red-400"
            >
              &times;
            </button>
            <div className="max-h-96 overflow-y-auto">
              <ul className="space-y-2 pt-8">
                {searchResults.map(movie => (
                  <li className="flex items-center space-x-4" key={movie.id}>
                    <span>{movie.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
