
import { Container, Box, Button, TextField, Divider, Stack, Card, Paper, Avatar, CardHeader } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto'; 
import DetallePelis from './DetallePelis';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';



const ContentPeliculasItem = () => {
  const [moviesData, setMoviesData] = useState([]);
  const { path } = useParams();

  const obtenerPeliculas = async () => {
    const response = await fetch("/peliculas.json");
    const data = await response.json();
    setMoviesData(data);
  };

  useEffect(() => {
    obtenerPeliculas();
  }, []);

 
  const peliculaEspecifica = moviesData.find((pelicula) => pelicula.path === path);

  return (
    <Box flex={2} sx={{ p: 4 }}>
      <Typography variant="h4" component="div" sx={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
        Películas
      </Typography>

      {peliculaEspecifica && (
        <DetallePelis
          title={peliculaEspecifica.title}
          year={peliculaEspecifica.year}
          thumbnail={peliculaEspecifica.thumbnail}
          extract={peliculaEspecifica.extract}
          genres={peliculaEspecifica.genres}
          path={peliculaEspecifica.path}
          salas={peliculaEspecifica.salas} 

        />
      )}

      
    </Box>
  );
};

export default ContentPeliculasItem;
