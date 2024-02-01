import React from 'react';
import { Box, Grid, Typography, Card, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const DetallePelis = ({ DataPelis }) => {

  const currentPeli = DataPelis.find(Peli => Peli.id === 8); 

  return (
    <Box sx={{ padding: 4, mt: 5 }}>
      <Grid item md={4} sx={{ mb: 1 }}>
       
        <Typography variant="h4" sx={{ fontSize: '40px', fontFamily: 'Roboto' }}>
          {currentPeli.title}
        </Typography>

      
        <Grid sx={{ display: 'flex' }}>
          <LocationOnIcon color="action" sx={{ marginRight: '15px', marginBottom: '20px', marginTop: '10px' }} />
          <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{ marginBottom: '20px', marginTop: '10px' }}>
            {currentPeli.year}
          </Typography>

          
          <LocationOnIcon color="action" sx={{ marginLeft: '15px', marginRight: '15px', marginBottom: '20px', marginTop: '10px' }} />
          <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{ marginBottom: '20px', marginTop: '10px', fontFamily: 'Roboto' }}>
            {/* {currentPeli.director}*/} Director
          </Typography>
        </Grid>
      </Grid>

 
      <Grid display="flex" item sx={{width: '100%' }}>
       
        <Card>
       
          <Grid item md={4} sx={{ height: '100%', width: '100%' }}>
            <img
              src={currentPeli.thumbnail}
              alt={currentPeli.title}
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        </Card>

        <Grid
          sx={{
            ml: { xs: 0, md: 5 },
            height: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <Card sx={{ height: '100%', width: '55%', pr:5 }}>
            <Grid sx={{ mr: { xs: 0, md: 3 } }}>
              <header typeof="title">
                <Typography variant="h5" style={{ margin: '8%' }}>
                  Sinopsis
                </Typography>
              </header>

              <Typography
                variant="body1"
                style={{
                  margin: '8%',
                  fontSize: '16px',
                  fontFamily: 'Roboto',
                }}
              >
                {currentPeli.extract}
              </Typography>

              <Box sx={{ mt: '16px', display: 'flex', gap: '8px', margin: '5%' }}>
               {currentPeli.genres.map((genre, index) => (
                 <Chip
                key={index}
                 label={genre}
                 variant="filled"
                color="default"
                     style={{ padding: '4px', borderRadius: '100px' }}
                  />
                  ))}
</Box>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetallePelis;
