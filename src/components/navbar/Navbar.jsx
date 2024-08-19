import { useContext, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context';
import Footer from '../footer/Footer';

function Navbar() {
  const { searchParam, setSearchParam, handleSearchOnSubmit } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchOnSubmit(event);
    navigate('/'); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-tertiary p-2 w-full fixed z-50">
        <nav className="flex justify-start gap-2 sm:justify-between items-center max-w-5xl mx-auto">
          <NavLink className="logo text-secondary text-xl font-pacifico pr-2" to="/">MovieMaze</NavLink>
          
          <div className="search-button flex-1">
            <form onSubmit={handleSubmit} className="flex">
              <input 
                type='text' 
                placeholder='Search'
                value={searchParam}
                onChange={(event) => setSearchParam(event.target.value)}
                className='text-tertiary py-1 px-2 pl-8 border border-tertiary rounded-full bg-primary w-full max-w-24 md:max-w-xl'
              />
            </form>
          </div>

          <div className="hidden sm:flex space-x-4">
            <NavLink className="nav-link" to="popularMovies">Movies</NavLink>
            <NavLink className="nav-link" to="popularTvshows">TV Shows</NavLink>
            <NavLink className="nav-link" to="watchlist">Watchlist</NavLink>
          </div>

          {/* Three-dot menu for small devices */}
          <div className="sm:hidden relative">
            <div onClick={toggleDropdown} className="vertical-dots cursor-pointer text-tertiary">
              &#8942; {/* Vertical three-dot icon */}
            </div>
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="dropdown-menu absolute right-0 mt-2 bg-primary text-tertiary rounded shadow-lg">
                <NavLink className="block px-4 py-2" to="popularMovies" onClick={() => setIsDropdownOpen(false)}>Movies</NavLink>
                <NavLink className="block px-4 py-2" to="popularTvshows" onClick={() => setIsDropdownOpen(false)}>TV Shows</NavLink>
                <NavLink className="block px-4 py-2" to="watchlist" onClick={() => setIsDropdownOpen(false)}>Watchlist</NavLink>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className='pt-12 flex-grow'>
        <Outlet />
      </main>
      <footer className='bg-primary w-full'>
        <Footer />
      </footer>
    </div>
  );
}

export default Navbar;
