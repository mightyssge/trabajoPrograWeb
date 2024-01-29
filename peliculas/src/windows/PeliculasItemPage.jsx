import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentMenuPelis from './components/ContentMenuPelis.jsx';
import {Box , Stack} from "@mui/material";
import ContPeliculasItem from './components/ContentPeliculasItem.jsx'


function MenuPelisPage() {
    return (

      //esto es el contenido de los menus
      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        
          <ContPeliculasItem/>
         
        </Stack>
      </Box>
    
    );
  }

export default MenuPelisPage;