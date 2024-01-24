import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';
import {Box , Stack} from "@mui/material";


function App() {
    return (
      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <Content/>
        </Stack>
      </Box>
    
    );
  }

export default App;
