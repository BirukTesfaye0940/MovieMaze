import { useState, useEffect } from 'react';
import FilterSection from '../../components/Filter-section/FilterSection';
import PopularCardTv from '../../components/popularCard/PopularCardTv';

const API_KEY = 'cd133ea3b6afe0e0f42c62d64a2e23ce';

const tvGenres = [
  { name: 'Action & Adventure', id: 10759 },
  { name: 'Comedy', id: 35 },
  { name: 'Animation', id: 16 },
  { name: 'Crime', id: 80 },
  { name: 'Drama', id: 18 },
  { name: 'Romance', id: 10749 },
  { name: 'Mystery', id: 9648 },
  { name: 'Sci-Fi & Fantasy', id: 10765 },
  { name: 'Mystery', id: 9648 }, 
];



function PopularTvshows() {
  const [selectedYearRange, setSelectedYearRange] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [tvshows, setTvshows] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const genreParam = selectedGenres.join(',');
      let url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${genreParam}`;

      // Handle the year range
      if (selectedYearRange) {
        const [startYear, endYear] = selectedYearRange.split('-').map(year => year.trim());
        if (startYear) {
          url += `&first_air_date.gte=${startYear}-01-01`;
        }
        if (endYear) {
          url += `&first_air_date.lte=${endYear}-12-31`;
        }
      }

      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results)
      setTvshows(data.results || []);
    };

    fetchMovies();
  }, [selectedYearRange, selectedGenres]);


  return (
    <div className='bg-tertiary'>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className='mr-5'>
          <FilterSection
            selectedYearRange={selectedYearRange}
            setSelectedYearRange={setSelectedYearRange}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={tvGenres}
          />
        </div>
        {tvshows && tvshows.length > 0 ? (
          tvshows.map((movie, index) => (
            <PopularCardTv key={movie.id} trending={movie} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default PopularTvshows




