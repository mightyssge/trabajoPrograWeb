import React from "react";
import { Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import CardSala from "./CardSala";


const ContentSalasIndex = () => {
    const [salasData, setSalasData] = useState([])
    const obtenerSalas = async () => {
        const response = await fetch("/salas.json")
        const data = await response.json()
        setSalasData(data)
    }
    useEffect(() => {
        obtenerSalas()
    }, [])

    return (
        <Box flex={7} sx={{ p: 3 }} >

            <Typography variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
                Salas disponibles
            </Typography>


            <Box  sx={{ mt: 3, p: 2}} >

                <Grid container spacing={2} > 
                {
                    salasData.map((e)=>{
                        return (
                        <CardSala
                            sala={e}
                            name={e.name}
                            address={e.address}
                            city={e.city}
                            path={e.path}
                            formats={e.formats}
                            img={e.img}
                        />)
                    })
                }
                 

                    

                    
                </Grid>
            </Box>
        </Box>
    )
}

export default ContentSalasIndex