import React from 'react';
import { Box, Grid, Typography, Card, Chip} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const DetallePelis = ({ title, year, thumbnail, extract, genres }) => {
 
  return (
    <Box sx={{ padding: 4, mt: 5 }}>
      <Grid item md={4} sx={{ mb: 1 }}>
       
        <Typography variant="h4" sx={{ fontSize: '40px', fontFamily: 'Roboto' }}>
          {title}
        </Typography>

      
        <Grid sx={{ display: 'flex' }}>
          <LocationOnIcon color="action" sx={{ marginRight: '15px', marginBottom: '20px', marginTop: '10px' }} />
          <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{ marginBottom: '20px', marginTop: '10px' }}>
            {year}
          </Typography>

          
          <LocationOnIcon color="action" sx={{ marginLeft: '15px', marginRight: '15px', marginBottom: '20px', marginTop: '10px' }} />
          <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{ marginBottom: '20px', marginTop: '10px', fontFamily: 'Roboto' }}>
            {/* {director}*/} Director
          </Typography>
        </Grid>
      </Grid>

 
      <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%' }}>
          <img
            src={thumbnail}
            alt={title}
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
            {extract}
          </Typography>

          <Box sx={{ mt: '16px', display: 'flex', gap: '8px', margin: '5%' }}>
            {genres.map((genre, index) => (
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
