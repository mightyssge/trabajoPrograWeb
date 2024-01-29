import Header from '../components/Header.jsx';
import { Container,Stack } from "@mui/material";
import ContentSalaItem from '../components/ContentSalaItem.jsx'


function SalaItemPage() {
    return (

      //esto es el contenido de los menus
      <Container className='container'>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
         
          <ContentSalaItem/>
         
        </Stack>
      </Container>
    
    );
  }

export default SalaItemPage;