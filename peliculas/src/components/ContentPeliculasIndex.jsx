import React from "react";
import { Box, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import CardPelicula from "./CardPelicula";

const ContentPeliculasIndex = ({searchText}) => {
    const [moviesData, setMoviesData] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    const obtenerPeliculas = async () => {
        const response = await fetch("/peliculas.json")
        const data = await response.json()
        setMoviesData(data)
    }
    useEffect(() => {
        obtenerPeliculas()
    }, [])

    useEffect(() => {
        const filteredMovies = moviesData.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredMovies(filteredMovies)
    }, [moviesData, searchText])

    return (
        <Box flex={7} sx={{ p: 3 }} >

            <Typography variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }} >
                Películas
            </Typography>


            <Box
                sx={{ mt: 3, padding: '19px 24px 0 24px' }} >

                <Grid container spacing={2} >{/* bloque 1 */}
                    {
                        filteredMovies.map((e) => {
                            return (
                                <CardPelicula 
                                    movie={e}
                                    id={e.id}
                                    title={e.title}
                                    year={e.year}
                                    cast={e.cast}
                                    genres={e.genres}
                                    extract={e.extract}
                                    thumbnail={e.thumbnail}
                                    path={e.path}
                                />
                            )
                        })
                    }
                </Grid>{/* bloque 1 */}
            </Box>
        </Box>
    )
}

export default ContentPeliculasIndex