import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentMenuPelis from './components/ContentMenuPelis.jsx';
import {Box , Stack} from "@mui/material";


function MenuPelisPage() {
    return (

      //esto es el contenido de los menus
      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <ContentMenuPelis/>
        </Stack>
      </Box>
    
    );
  }

export default MenuPelisPage;