import Header from '../components/Header.jsx';
import ContentPeliculasIndex from '../components/ContentPeliculasIndex.jsx';
import { Container,Stack } from "@mui/material";


function PeliculasIndexPage() {
  return (

    //esto es el contenido de los menus
    <Container className='container'>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <ContentPeliculasIndex />
      </Stack>
    </Container>

  );
}

export default PeliculasIndexPage;