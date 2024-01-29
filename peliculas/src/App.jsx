import React from 'react';
import Header from './components/Header.jsx';
import ContentMenuPelis from './components/ContentPeliculasIndex.jsx';
import { Container, Stack } from "@mui/material";

function App() {
  return (
    <Container className='container'>      
      <Header />

      {/*En esta parte ponen su codigo para probar */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <ContentMenuPelis />
      </Stack>
      {/*En esta parte ponen su codigo para probar */}

    </Container>
  );
}

export default App;

