import {Navigate, Route, Routes} from "react-router-dom";
import React from 'react';
import PeliculasIndexPage from './windows/PeliculasIndexPage.jsx';
import PeliculasReservaPage from './windows/PeliculasReservaPage.jsx';
import PeliculasItemPage from './windows/PeliculasItemPage.jsx';
import SalaIndexPage from './windows/SalaIndexPage.jsx';
import SalaItemPage from "./windows/SalaItemPage.jsx";




const App = () => {
  return (

      <Routes>
        <Route path="*" element={<Navigate to="/peliculas" replace={true} />} />
        <Route path="/peliculas" element={<PeliculasIndexPage />} />
        <Route path="/reserva" element={<PeliculasReservaPage />} />
        <Route path="/peliculas/:path" element={<PeliculasItemPage />} />
        <Route path="/salas" element={<SalaIndexPage />} />
        <Route path="/salas/:path" element={<SalaItemPage />} /> 
       

      </Routes>

  );
};

export default App;
