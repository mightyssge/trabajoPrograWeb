import Header from '../components/Cabecera.jsx';
import ContentPeliculasIndex from '../components/ContentPeliculasIndex.jsx';
import { Container,Stack } from "@mui/material";
import { useState } from 'react';

function PeliculasIndexPage() {
  const [filterText, setFilterText] = useState("")

  return (

    //esto es el contenido de los menus
    <Container className='container'>
      <Header onTextfieldChange={setFilterText}/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <ContentPeliculasIndex searchText={filterText} />
      </Stack>
    </Container>

  );
}

export default PeliculasIndexPage;