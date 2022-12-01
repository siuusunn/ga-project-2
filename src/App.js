import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokedexIndividual from './components/PokedexIndividual';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/pokedex-all" element={PokedexAll} /> */}
          <Route path="/pokedex-individual" element={<PokedexIndividual />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
