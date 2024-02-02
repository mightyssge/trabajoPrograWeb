import React from 'react';
import { RouterProvider } from "react-router-dom"
import Rutas from "./router/Rutas"

function App() {
  return (
    <RouterProvider router={ Rutas() } />
  );
}

export default App;

