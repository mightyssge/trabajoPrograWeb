import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Chip } from '@mui/material'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import {  useNavigate } from 'react-router-dom'

function CardPelicula(props) {

    const navigate= useNavigate()

    const cardOnClick = () => {
        navigate( props.path ,{state: {movie: props.movie}})
    }

    return (
        <Grid item md={4}>
            
                <Card>
                    <CardActionArea onClick={cardOnClick}>
                        <Paper>

                            <CardMedia
                                component="img"
                                image={props.thumbnail}
                                alt="Imagen"
                            />
                            
                        </Paper>
                        <Paper>
                            <CardContent sx={{ p: 2 }}>

                                <Typography variant="subtitle2" color="#2196F3" fontWeight="bold">
                                    {props.year}
                                </Typography>

                                <Typography sx={{ py: 1, my: '8px' }} variant="h6" color="black" fontWeight="bold">
                                    {props.title}
                                </Typography>

                                <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>
                                    {
                                        props.genres.map((label) => { 
                                            return <Chip label={label} variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                        }
                                        )}
                                </Box>

                            </CardContent>
                        </Paper>
                    </CardActionArea>
                </Card>
            
        </Grid>
    )
}

export default CardPelicula