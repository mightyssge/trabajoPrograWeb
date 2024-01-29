import Header from './components/Header.jsx';
import ContentMenuSalas from './components/ContentSalasIndex.jsx';
import {Box , Stack} from "@mui/material";


function MenuSalasPage() {
    return (

      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <ContentMenuSalas/>
        </Stack>
      </Box>
    
    );
  }

export default MenuSalasPage;