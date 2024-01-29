import React from "react";
import { Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom"


const ContentSalasIndex = () => {
    return (
        <Box flex={7} sx={{ p: 3 }} >

            <Typography variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
                Salas disponibles
            </Typography>


            <Box  sx={{ mt: 3, p: 2}} >

                <Grid container spacing={2} > 

                    <Grid item md={6} >
                        
                        <Card >
                        <Link to={'/salaIndex/:id'}>
                            <CardMedia
                                component="img"
                                image="https://static.wikia.nocookie.net/doblaje/images/9/93/Alice_la_gemela_del_diablo_portada.jpg"
                                alt="Imagen"
                            />
                            <CardContent sx={{ p: 2 }}>
                                <Typography variant="subtitle2" color="#2196F3" fontWeight="bold">
                                    John Doe - 4 Feb 2022
                                </Typography>
                                <Typography sx={{ py: 1, my: '8px' }} variant="h6" color="black" fontWeight="bold">
                                    Sala A
                                </Typography>
                                <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>
                                    <Chip label="12:00" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    <Chip label="14:00" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    <Chip label="15:00" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    <Chip label="16:00" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                </Box>
                            </CardContent>
                            </Link>
                        </Card>
                    </Grid>

                    <Grid item md={6} sx={{ marginBottom: 1 }}>
                        <Card>
                            <CardMedia
                                component="img"
                                image="https://static.wikia.nocookie.net/doblaje/images/9/93/Alice_la_gemela_del_diablo_portada.jpg"
                                alt="Imagen"
                            />
                            <CardContent sx={{ p: 2 }}>
                                <Typography variant="subtitle2" color="#2196F3" fontWeight="bold">
                                    John Doe - 4 Feb 2022
                                </Typography>
                                <Typography sx={{ py: 1, my: '8px' }} variant="h6" color="black" fontWeight="bold">
                                    Sala B
                                </Typography>

                                <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>
                                    <Chip label="Security" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    <Chip label="Back-end" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />

                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} sx={{ marginBottom: 1 }}>
                        <Card>
                            <CardMedia
                                component="img"
                                image="https://static.wikia.nocookie.net/doblaje/images/9/93/Alice_la_gemela_del_diablo_portada.jpg"
                                alt="Imagen"
                            />
                            <CardContent sx={{ p: 2 }}>
                                <Typography variant="subtitle2" color="#2196F3" fontWeight="bold">
                                    John Doe - 4 Feb 2022
                                </Typography>
                                <Typography sx={{ py: 1, my: '8px' }} variant="h6" color="black" fontWeight="bold">
                                    Sala C
                                </Typography>
                                <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>
                                    <Chip label="5 horarios" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={6} sx={{ marginBottom: 1,  }}>
                        <Card>
                            <CardMedia
                                component="img"
                                image="https://static.wikia.nocookie.net/doblaje/images/9/93/Alice_la_gemela_del_diablo_portada.jpg"
                                alt="Imagen"
                            />
                            <CardContent sx={{ p: 2 }}>
                                <Typography variant="subtitle2" color="#2196F3" fontWeight="bold">
                                    John Doe - 4 Feb 2022
                                </Typography>
                                <Typography sx={{ py: 1, my: '8px' }} variant="h6" color="black" fontWeight="bold">
                                    Sala D
                                </Typography>

                                <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>
                                    <Chip label="Security" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    <Chip label="Back-end" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                image="https://static.wikia.nocookie.net/doblaje/images/9/93/Alice_la_gemela_del_diablo_portada.jpg"
                                alt="Imagen"
                            />
                            <CardContent sx={{ p: 2 }}>
                                <Typography variant="subtitle2" color="#2196F3" fontWeight="bold">
                                    John Doe - 4 Feb 2022
                                </Typography>
                                <Typography sx={{ py: 1, my: '8px' }} variant="h6" color="black" fontWeight="bold">
                                    Sala E
                                </Typography>
                                <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>
                                    <Chip label="5 horarios" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                image="https://static.wikia.nocookie.net/doblaje/images/9/93/Alice_la_gemela_del_diablo_portada.jpg"
                                alt="Imagen"
                            />
                            <CardContent sx={{ p: 2 }}>
                                <Typography variant="subtitle2" color="#2196F3" fontWeight="bold">
                                    John Doe - 4 Feb 2022
                                </Typography>
                                <Typography sx={{ py: 1, my: '8px' }} variant="h6" color="black" fontWeight="bold">
                                    Sala F
                                </Typography>

                                <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>
                                    <Chip label="Security" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    <Chip label="Back-end" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ContentSalasIndex