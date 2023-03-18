import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NfsPage from './pages/NfsPage';
import CreateMoviesPage from './pages/CreateMoviePage';
import CreateNfPage from './pages/CreateNfPage';
import CreateBudgetPage from './pages/CreateBudgetPage';
import CreateProducerPage from './pages/CreateProducerPage';
import CreateInvestorPage from './pages/CreateInvestorPage';
import CreateProfessionalPage from './pages/CreateProfessionalPage';
import Navbar from './components/Navbar';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NfDetailsPage from './pages/NfDetailsPage';
import CreateStarPage from './pages/CreateStarPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import IsLogged from './components/IsLogged';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/nf' element={<NfsPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='/nf/:nfId' element={<NfDetailsPage />} />
        <Route path='/create-movie' element={<IsLogged><CreateMoviesPage /></IsLogged>} />
        <Route path='/create-nf' element={<IsLogged><CreateNfPage /></IsLogged>} />
        <Route path='/budget' element={<IsLogged><CreateBudgetPage /></IsLogged>} />
        <Route path='/create-star' element={<IsLogged><CreateStarPage /></IsLogged>} />
        <Route path='/producer' element={<IsLogged><CreateProducerPage /></IsLogged>} />
        <Route path='/investor' element={<IsLogged><CreateInvestorPage /></IsLogged> } />
        <Route path='/professionals' element={<IsLogged><CreateProfessionalPage /></IsLogged>} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;