import React, { useState } from 'react';
import { Container, Box, Button, TextField, Divider, Stack, Grid, Card, Paper, Avatar, CardHeader } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import { blue, red } from '@mui/material/colors';
import '@fontsource/roboto'; 
import DetallePelis from './DetallePelis';
import DetalleSalasDispo from './DetalleSalasDispo';
import DataPelis from './peliculas_limpio.json';






const ContentPeliculasItem = () => {
 
  return (

    <Box flex={2} sx={{ p: 4 }} >
      <Typography variant="h4" component="div" sx={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
        Películas
      </Typography>

      <DetallePelis DataPelis={DataPelis} />

      
        

        <Grid style={{ paddingTop: "2%", width: "100%" }}item  md={4} >
          <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
            Salas disponibles
          </Typography>
        </Grid>

        <DetalleSalasDispo/>

    </Box>



  );
};

export default ContentPeliculasItem;