import React, { useState, useEffect } from 'react';
import PopularCard from '../../components/popularCard/PopularCard';
import FilterSection from '../../components/Filter-section/FilterSection';

const API_KEY = 'cd133ea3b6afe0e0f42c62d64a2e23ce';

const movieGenres = [
  { name: 'Action', id: 28 },
  { name: 'Comedy', id: 35 },
  { name: 'Animation', id: 16 },
  { name: 'Crime', id: 80 },
  { name: 'Drama', id: 18 },
  { name: 'Romance', id: 10749 },
  { name: 'Thriller', id: 53 },
  { name: 'Sci-Fi', id: 878 },
  { name: 'Horror', id: 27 },
  { name: 'Fantasy', id: 14 },
];

function PopularMovies() {
  const [selectedYearRange, setSelectedYearRange] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const genreParam = selectedGenres.join(',');
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreParam}`;

      // Handle the year range
      if (selectedYearRange) {
        const [startYear, endYear] = selectedYearRange.split('-').map(year => year.trim());
        if (startYear) {
          url += `&primary_release_date.gte=${startYear}-01-01`;
        }
        if (endYear) {
          url += `&primary_release_date.lte=${endYear}-12-31`;
        }
      }

      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results)
      setMovies(data.results || []);
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
            genres={movieGenres}
          />
        </div>
        {movies && movies.length > 0 ? (
          movies.map((movie, index) => (
            <PopularCard key={movie.id} trending={movie} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
