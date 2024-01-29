import Header from '../components/Header.jsx';
import ContentMenuReserva from './components/ContentSalaIndex.jsx';
import {Box , Stack} from "@mui/material";

function MenuReservaPage() {
    return (

      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <ContentMenuReserva/>
        </Stack>
      </Box>
    
    );
  }

export default MenuReservaPage;