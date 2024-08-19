const FilterSection = ({ selectedYearRange, setSelectedYearRange, selectedGenres, setSelectedGenres, genres }) => {
  return (
    <div className="container w-56 h-[275] flex flex-col p-2 bg-primary text-white gap-2 rounded-br-md">
      <div className="flex flex-col justify-center items-center">
        <h4 className='text-white'>Year Range:</h4>
        <input
          type="text"
          placeholder="e.g., 1990-1995"
          value={selectedYearRange}
          onChange={(e) => setSelectedYearRange(e.target.value)}
          className="px-1 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className='text-white'>Genres:</h4>
        <ul className='flex flex-col'>
          {genres.map((genre) => (
            <li className='flex justify-between' key={genre.id}>
              <div className='text-secondary'>
                {genre.name}
              </div>
              <input
                className='text-white'
                type="checkbox"
                value={genre.id}
                checked={selectedGenres.includes(genre.id)}
                onChange={() => {
                  if (selectedGenres.includes(genre.id)) {
                    setSelectedGenres(selectedGenres.filter((id) => id !== genre.id));
                  } else {
                    setSelectedGenres([...selectedGenres, genre.id]);
                  }
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
