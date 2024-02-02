import React from 'react';
import {  Typography,  Chip} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container, Box, Button, TextField, Divider, Stack, Grid, Card, Paper, Avatar, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';


const DetallePelis = ({ title, year, thumbnail, extract, genres, salas }) => {
 
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
    <Grid style={{ paddingTop: "2%", width: "100%" }} item md={4}>
        <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
          Salas disponibles
        </Typography>
      </Grid>
      <Box sx={{ mt: 10, width: "55%", height: "100%" }}>
  {salas && salas.map((sala, index) => (
    <Grid key={index} style={{ marginBottom: "18%" }}>
            <Grid item md={4}>
              <Container style={{ width: "100%", height: "100%" }}>
                <Container style={{ display: "flex", marginBottom: "4%" }}>
                  <Avatar variant='square'>
                    <Typography >
                      {sala.siglas}
                    </Typography>
                  </Avatar>
                  <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                    {sala.sala}
                  </Typography>
                </Container>

                <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                {sala.address}
                </Typography>
              </Container>

              <Grid sx={{ display: "flex", ml: 4, mb: 5 }}>
                {sala.horarios.map((horario, horarioIndex) => (
                  <Box
                    key={horarioIndex}
                    sx={{
                      marginTop: '40px',
                      width: '80px',
                      height: '28px',
                      border: '1px dashed #9747FF',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'rgba(151, 71, 255, 0.04)',
                      marginLeft: '20px',
                      padding: "4px, 24px, 4px, 24px"
                    }}
                  >
                    <Link to={`/peliculasReserva/${index}/${horarioIndex}`}>
                      <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>
                        {horario}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default DetallePelis;