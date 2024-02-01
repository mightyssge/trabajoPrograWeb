import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom'


function CardSala(props) {

    const navigate = useNavigate()

    const cardOnClick = () => {
        navigate(props.path, { state: { sala: props.sala } })
    }

    return (
        <Grid item md={6} >

            <Card >
                <CardActionArea onClick={cardOnClick}>
                    <CardMedia
                        component="img"
                        image={props.img}
                        alt="Imagen"
                    />
                    <CardContent sx={{ p: 2 }}>
                        <Typography variant="subtitle2" color="#2196F3" fontWeight="bold">
                            {props.city} - {props.address}
                        </Typography>
                        <Typography sx={{ py: 1, my: '8px' }} variant="h6" color="black" fontWeight="bold">
                            {props.name}
                        </Typography>
                        <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>
                            {
                                props.formats.map((label) => {
                                    return <><Chip label={label} variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} /></>
                                }
                                )
                            }
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default CardSala