import React, { useState } from 'react';
import { Container, Box, Button, TextField, Divider, Stack, Grid, Card, Paper, Avatar, CardHeader } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from "react-router-dom"
import { blue, red } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';




const ContentSalaItem = () => {

  const location = useLocation();
  const currentSala = location.state?.sala

  if (!currentSala) {
    // Manejar el caso donde currentSala es undefined, por ejemplo, redirigir a una página de error.
    return <p>La sala no existe o no se ha especificado.</p>;
  }

  return (

    <Box flex={2} >
      <Typography variant="h4" component="div" sx={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
        Salas
      </Typography>
      <Box sx={{ padding: 5, mt: 5 }}>
        <Grid item md={4} sx={{ mb: 1 }} >
          <Typography variant="h4" sx={{ fontSize: "40px", fontFamily: "Roboto" }}  >{currentSala.name}</Typography>
          <Grid sx={{ display: "flex", my:3 }}>
            <LocationOnIcon color="action" sx={{ marginRight: "15px"  }} ></LocationOnIcon>
            <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{  }}>
              {currentSala.city} - {currentSala.address}
            </Typography>
          </Grid>
        </Grid>

        <Grid display={"flex"} container spacing={2}  >
          <Grid item sm={8} sx={{ height: "100%" }} >
            <Card >
              <CardMedia
                component="img"
                image={currentSala.img}
              />
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card sx={{ height: "100%" }}>
              <header typeof='title'>
                <Typography variant='h5' style={{ margin: "8%" }} > {currentSala.description}</Typography>
              </header>
              <Typography variant='body1' style={{ marginLeft: "4%", fontSize: "16px", fontFamily: "Roboto", paddingLeft: "4%" }} >
                Nro Telefono: <br />{currentSala.phoneNumber} <br />
                <br />Tipos de salas disponibles: 
                <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>
                {
                  currentSala.formats.map((label) => {
                    return <><Chip label={label} variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} /></>
                  }
                  )
                }</Box>
              </Typography>
            </Card>
          </Grid>
        </Grid>


        <Grid item style={{ width: "100%" }} sx={{ mt: 4 }} md={4} >
          <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
            Peliculas disponibles
          </Typography>
        </Grid>



        <Box sx={{ mt: 5, width: "70%", height: "140%" }} >
          {/*Inicio */}

          <Grid item md={4}>
            <Container style={{ width: "100%", height: "100%" }}>
              <Container style={{ display: "flex", marginBottom: "4%" }}>
                <Avatar variant='rounded' >
                  BS
                </Avatar>
                <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                  <b>Beekeeper Sentencia de Muerte</b>
                </Typography>
              </Container>
              <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </Typography>
            </Container>

            <Grid sx={{ display: "flex", ml: 4, mb: 5 }}>
              <Button
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
                <Link to={'/peliculasReserva/:id'}><Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>15:00</Typography></Link>
              </Button>

            </Grid>

          </Grid>
          {/*fIN */}






















        </Box>
      </Box >

    </Box>



  );
};

export default ContentSalaItem;