
import { Container, Box, Button, TextField, Divider, Stack, Card, Paper, Avatar, CardHeader } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto'; 
import DetallePelis from './DetallePelis';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';



const ContentPeliculasItem = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [salasData, setSalasData] = useState([])
  const { path } = useParams();

  const obtenerPeliculas = async () => {
    try {
      const response = await fetch("/peliculas.json");
      const data = await response.json();
      setMoviesData(data);
    } catch (error) {
      console.error("Error fetching peliculas.json", error);
    }
  };

 const obtenerSalas = async () => {
  try {
    const response = await fetch("/salas.json");
    const data = await response.json();
    setSalasData(data);
  } catch (error) {
    console.error("Error fetching salas.json", error);
  }
};
  useEffect(() => {
    obtenerPeliculas();
    obtenerSalas();
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
          salas={peliculaEspecifica.salas.map(sala => {
            const salaInfo = salasData.find(s => s.name === sala.sala);
            return { ...sala, ...salaInfo };
          })} 
          

        />
      )}

      
    </Box>
  );
};

export default ContentPeliculasItem;
