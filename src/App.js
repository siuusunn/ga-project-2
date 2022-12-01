// import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={Home} />
          <Route path="/pokedex-all" element={PokedexAll} />
          <Route path="/pokedex-individual" element={PokedexIndividual} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
};

export default App;
