import Header from '../components/Header.jsx';
import ContentSalasIndex from '../components/ContentSalasIndex.jsx';
import { Container,Stack } from "@mui/material";


function SalaIndexPage() {
    return (

      <Container className='container'>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <ContentSalasIndex/>
        </Stack>
      </Container>
    
    );
  }

export default SalaIndexPage;