import React from 'react';
import { Box, Grid, Typography, Card, Chip} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const DetallePelis = ({ DataPelis,randomId }) => {

  const PeliSelect = DataPelis.find(Peli => Peli.id === randomId);
  console.log('ID recibida:', randomId);


  return (
    <Box sx={{ padding: 4, mt: 5 }}>
      <Grid item md={4} sx={{ mb: 1 }}>
       
        <Typography variant="h4" sx={{ fontSize: '40px', fontFamily: 'Roboto' }}>
          {PeliSelect.title}
        </Typography>

      
        <Grid sx={{ display: 'flex' }}>
          <LocationOnIcon color="action" sx={{ marginRight: '15px', marginBottom: '20px', marginTop: '10px' }} />
          <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{ marginBottom: '20px', marginTop: '10px' }}>
            {PeliSelect.year}
          </Typography>

          
          <LocationOnIcon color="action" sx={{ marginLeft: '15px', marginRight: '15px', marginBottom: '20px', marginTop: '10px' }} />
          <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{ marginBottom: '20px', marginTop: '10px', fontFamily: 'Roboto' }}>
            {/* {PeliSelect.director}*/} Director
          </Typography>
        </Grid>
      </Grid>

 
      <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%' }}>
          <img
            src={PeliSelect.thumbnail}
            alt={PeliSelect.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Card>
      </Grid>

      <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Card sx={{ height: '100%', width: '100%', pr: 2 }}>
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
            {PeliSelect.extract}
          </Typography>

          <Box sx={{ mt: '16px', display: 'flex', gap: '8px', margin: '5%' }}>
            {PeliSelect.genres.map((genre, index) => (
              <Chip
                key={index}
                label={genre}
                variant="filled"
                color="default"
                style={{ padding: '4px', borderRadius: '100px' }}
              />
            ))}
          </Box>
        </Card>
      </Grid>
    </Grid>
    </Box>
  );
};

export default DetallePelis;
