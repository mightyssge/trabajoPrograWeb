import Header from './components/Header.jsx';
import {Box , Stack} from "@mui/material";
import ContentSalaItem from './components/ContentSalaItem.jsx'


function SalaItemPage() {
    return (

      //esto es el contenido de los menus
      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
         
          <ContentSalaItem/>
         
        </Stack>
      </Box>
    
    );
  }

export default SalaItemPage;