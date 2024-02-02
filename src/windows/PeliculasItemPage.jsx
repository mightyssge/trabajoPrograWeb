import Header from '../components/Header.jsx';
import { Container,Stack } from "@mui/material";
import ContentPeliculasItem from '../components/ContentPeliculasItem.jsx'


function PeliculasItemPage() {
    return (

      //esto es el contenido de los menus
      <Container className='container'>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        
          <ContentPeliculasItem/>
         
        </Stack>
      </Container>
    
    );
  }

export default PeliculasItemPage;