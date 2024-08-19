import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import GlobalState from './context/index.jsx'; 

// Pages
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import PopularMovies from './pages/popularMovies/PopularMovies';
import Watchlist from './pages/watchlist/Watchlist';
import PopularTvshows from './pages/popularTvshows/PopularTvshows';
import Details from './pages/details/index.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar />}>
    <Route index element={<Home />} />
    <Route path='popularMovies' element={<PopularMovies />} />
    <Route path='popularTvshows' element={<PopularTvshows />} />
    <Route path='watchlist' element={<Watchlist />} />
    <Route path='/details/:type/:id' element={<Details />}/>
  </Route>
));

function App() {
  return (
    <GlobalState>
      <RouterProvider router={router} />
    </GlobalState>
  );
}

export default App;
