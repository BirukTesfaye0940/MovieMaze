import { useState, createContext, useEffect } from "react";
import useStorage from '../util/useStorage'

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [PopularTvshowsList, setPopularTvshowsList] = useState([]);
  const [trendingTvshowsList, setTrendingTvshowsList] = useState([]);
  const [detailData, setDetailData] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [latestMovies, setLatestMovies] = useState([]);
  const [latestTvShows, setLatestTvShows] = useState([]);

  const [storedValue, setValue] = useStorage('watchlist', []);


  const API_KEY = 'cd133ea3b6afe0e0f42c62d64a2e23ce';
  const BASE_URL = 'https://api.themoviedb.org/3';

  async function handleSearchOnclick() {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchParam}`);
      const data = await res.json();
      console.log(data);
      setSearchResults(data.results);
      setLoading(false);
    } catch (e) {
      console.log('Error:', e);
      setLoading(false);
    }
  }

  async function getPopularMovies() {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setPopularMoviesList(data.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getPopularTvshows() {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
      const data3 = await response.json();
      console.log(data3);
      if (data3) {
        setPopularTvshowsList(data3.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getTrendingMovies() {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
      const data2 = await response.json();
      console.log(data2);
      if (data2) {
        setTrendingMoviesList(data2.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getTrendingTvshows() {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`);
      const data4 = await response.json();
      console.log(data4);
      if (data4) {
        setTrendingTvshowsList(data4.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getLatestMovies() {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
      const data5 = await response.json();
      console.log(data5);
      if (data5) {
        setLatestMovies(data5.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getLatestTvshows() {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`);
      const data6 = await response.json();
      console.log(data6);
      if (data6) {
        setLatestTvShows(data6.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }


  const handleSearchOnSubmit = (event) => {
    event.preventDefault();
    setShowSearchResults(true);
    handleSearchOnclick();
  };

  function handleAddToWatchlist(getCurrentFilm) {
    let cpyWatchlist = [...watchlist]
    const index = cpyWatchlist.findIndex(film => film?.id === getCurrentFilm.id)

    if (index === -1) {
      cpyWatchlist.push(getCurrentFilm)
    }
    else {
      cpyWatchlist.splice(index, 1)
    }
    setWatchlist(cpyWatchlist)
    setValue(cpyWatchlist)
  }


  return (
    <GlobalContext.Provider value={{
      searchParam, setSearchParam, 
      loading, setLoading,
      detailData, setDetailData, 
      watchlist, setWatchlist,
      searchResults,
      showSearchResults, setShowSearchResults,
      handleSearchOnSubmit,
      popularMoviesList, setPopularMoviesList,
      trendingMoviesList, setTrendingMoviesList,
      PopularTvshowsList, setPopularTvshowsList,
      trendingTvshowsList, setTrendingTvshowsList,
      latestMovies,
      latestTvShows,
      getPopularMovies,
      getTrendingMovies,
      getPopularTvshows,
      getTrendingTvshows,
      getLatestMovies,
      getLatestTvshows,
      handleAddToWatchlist
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
