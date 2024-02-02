import React, { useState, useEffect } from 'react';
import { Container, Box, Button, TextField, Divider, Stack, Grid, Card, Paper, Avatar, CardHeader } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from "react-router-dom"
import { blue, red } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';
import PeliculasDisponibles from './PeliculasDisponibles';




const ContentSalaItem = () => {

  const location = useLocation();
  const currentSala = location.state?.sala


  const [moviesData, setMoviesData] = useState([])
  const obtenerPeliculas = async () => {
    const response = await fetch("/peliculas.json")
    const data = await response.json()
    setMoviesData(data)
  }
  useEffect(() => {
    obtenerPeliculas()
  }, [])

  // Utilizando map para extraer el valor de "pelicula" de cada objeto en la lista
  const titulosFiltrados = currentSala.peliculas.map(pelicula => pelicula.pelicula);
  const currentPeliculasforSala = moviesData.filter(pelicula => titulosFiltrados.includes(pelicula.title));
  
  console.log(currentPeliculasforSala)

  if (currentPeliculasforSala == null) {
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
          <Grid sx={{ display: "flex", my: 3 }}>
            <LocationOnIcon color="action" sx={{ marginRight: "15px" }} ></LocationOnIcon>
            <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{}}>
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
          {
            currentSala.peliculas.map((funcion) => {
              return (
                <PeliculasDisponibles
                  pelicula={funcion.pelicula}
                  horarios={funcion.horarios}
                  listafiltrada={currentPeliculasforSala}
                />
              )
            })
          }
          
        </Box>
      </Box >

    </Box>



  );
};

export default ContentSalaItem;