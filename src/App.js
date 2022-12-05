import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokedexIndividual from './components/PokedexIndividual';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PokedexAll from './components/PokedexAll';

import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/pokedex-all/:id" element={<PokedexIndividual />} />
          <Route path="/pokedex-all" element={<PokedexAll />} />
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <p>The pokemon you are after, hasn&apos;t been found yet</p>
            }
          />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
