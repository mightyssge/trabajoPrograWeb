    import React, { useState, useEffect } from 'react';
    import { Grid, Container, Avatar, Typography, Button, Link } from '@mui/material';
    import CardMedia from '@mui/material/CardMedia';
    import LocationOnIcon from '@mui/icons-material/LocationOn';
    import Chip from '@mui/material/Chip';

    function PeliculasDisponibles(props) {
        const peliActual = props.listafiltrada.find(pelicula => pelicula.title === props.pelicula)
        console.log(peliActual)
    return (
            <Grid item md={4}>
                <Container style={{ width: "100%", height: "100%" }}>
                <Container style={{ display: "flex", marginBottom: "4%" }}>
                    <Avatar variant='rounded' >
                    {peliActual.siglas}
                    </Avatar>
                    <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                    <b>{props.pelicula}</b>
                    </Typography>
                </Container>
                <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                    {peliActual.extract}
                </Typography>
                </Container>

                <Grid sx={{ display: "flex", ml: 4, mb: 5 }}>
                    {
                        props.horarios.map((horario)=>{
                            return <Button
                            sx={{
                            marginTop: '40px',
                            width: '100px',
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
                            <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>{horario}</Typography>
                        </Button>
                        })
                    }
                

                </Grid>

            </Grid>
    )
    }

    export default PeliculasDisponibles