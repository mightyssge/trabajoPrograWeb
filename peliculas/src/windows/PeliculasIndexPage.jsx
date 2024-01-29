import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ContentMenuPelis from '../components/ContentPeliculasIndex.jsx';
import { Box, Stack } from "@mui/material";


function MenuPelisPage() {
  return (

    //esto es el contenido de los menus
    <Container className='container'>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <ContentMenuPelis />
      </Stack>
    </Container>

  );
}

export default MenuPelisPage;