import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PokedexAll from './components/PokedexAll';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/pokedex-all" element={<PokedexAll />} />
          {/* <Route path="/pokedex-individual" element={<PokedexIndividual/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
