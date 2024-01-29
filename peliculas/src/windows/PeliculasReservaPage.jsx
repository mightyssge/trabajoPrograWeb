import Header from '../components/Header.jsx';
import ContentPeliculasReserva from '../components/ContentPeliculasReserva.jsx';
import { Container,Stack } from "@mui/material";

function PeliculasReservaPage() {
    return (

      <Container className='container'>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <ContentPeliculasReserva/>
        </Stack>
      </Container>
    
    );
  }

export default PeliculasReservaPage;