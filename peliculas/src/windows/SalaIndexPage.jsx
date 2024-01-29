import Header from './components/Header.jsx';
import ContentSalasIndex from './components/ContentSalasIndex.jsx';
import {Box , Stack} from "@mui/material";


function SalaIndexPage() {
    return (

      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <ContentSalasIndex/>
        </Stack>
      </Box>
    
    );
  }

export default SalaIndexPage;