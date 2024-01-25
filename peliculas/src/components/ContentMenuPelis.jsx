import React from "react";
import { Box, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


const ContentMenuPelis = () => {
    return (
        <Box  flex={7} sx={{ p: 3 }} >

            <Typography  variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px' , borderBottom: '1px solid rgb(224, 224, 224)'}}>
                Películas
            </Typography>


            <Box  sx={{ mt: 3, padding: '19px 24px 0 24px' }}>

                <Grid container spacing={2}>

                    <Grid item md={4}>
                        <Card>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    image="https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001896?referenceScheme=HeadOffice&allowPlaceHolder=true"
                                    alt="Imagen"
                                />
                            </Paper>
                            <Paper>
                                <CardContent sx={{ p: 2 }}>
                                    <Typography  variant="subtitle2" color="#2196F3" fontWeight="bold">
                                        1hrs 50min
                                    </Typography>
                                    <Typography  sx={{ py: 1 ,my: '8px'}} variant="h6" color="black" fontWeight="bold">
                                        Beekeper Sentencia de muerte
                                    </Typography>
                                    <Box  sx={{mt:'16px',display: 'flex', gap: '8px' }} spacing={8}>
                                        <Chip label="Acción" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                                        <Chip label="+14" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    </Box>

                                </CardContent>
                            </Paper>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    image="https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001883?referenceScheme=HeadOffice&allowPlaceHolder=true"
                                    alt="Imagen"
                                />
                            </Paper>
                            <Paper>
                                <CardContent sx={{ p: 2 }}>
                                    <Typography  variant="subtitle2" color="#2196F3" fontWeight="bold">
                                        2hrs 10min
                                    </Typography>
                                    <Typography  sx={{ py: 1 ,my: '8px'}} variant="h6" color="black" fontWeight="bold">
                                        El Niño y la Garza
                                    </Typography>
                                    <Box  sx={{mt:'16px',display: 'flex', gap: '8px' }} spacing={8}>
                                        <Chip label="Anime" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                                        <Chip label="APT" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    </Box>

                                </CardContent>
                            </Paper>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    image="https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001897?referenceScheme=HeadOffice&allowPlaceHolder=true"
                                    alt="Imagen"
                                />
                            </Paper>
                            <Paper>
                                <CardContent sx={{ p: 2 }}>
                                    <Typography  variant="subtitle2" color="#2196F3" fontWeight="bold">
                                        1hrs 40min
                                    </Typography>
                                    <Typography  sx={{ py: 1 ,my: '8px'}} variant="h6" color="black" fontWeight="bold">
                                        Jack en la Caja Maldita 3
                                    </Typography>
                                    <Box  sx={{mt:'16px',display: 'flex', gap: '8px' }} spacing={8}>
                                        <Chip label="Terror" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                                        <Chip label="+14" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    </Box>

                                </CardContent>
                            </Paper>
                        </Card>
                    </Grid>

                    {/* SEGUNDA FILA */}
                    <Grid item md={4}>
                        <Card>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    image="https://via.placeholder.com/226x339"
                                    alt="Imagen"
                                />
                            </Paper>
                            <Paper>
                                <CardContent sx={{ p: 2 }}>
                                    <Typography  variant="subtitle2" color="#2196F3" fontWeight="bold">
                                        1hrs 20min
                                    </Typography>
                                    <Typography  sx={{ py: 1 ,my: '8px'}} variant="h6" color="black" fontWeight="bold">
                                        La Super Familia
                                    </Typography>
                                    <Box  sx={{mt:'16px',display: 'flex', gap: '8px' }} spacing={8}>
                                        <Chip label="Familiar" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                                        <Chip label="APT" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    </Box>

                                </CardContent>
                            </Paper>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    image="https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg"
                                    alt="Imagen"
                                />
                            </Paper>
                            <Paper>
                                <CardContent sx={{ p: 2 }}>
                                    <Typography  variant="subtitle2" color="#2196F3" fontWeight="bold">
                                        1hrs 40min
                                    </Typography>
                                    <Typography  sx={{ py: 1 ,my: '8px'}} variant="h6" color="black" fontWeight="bold">
                                        Soul
                                    </Typography>
                                    <Box  sx={{mt:'16px',display: 'flex', gap: '8px' }} spacing={8}>
                                        <Chip label="Animación" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                                        <Chip label="APT" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    </Box>

                                </CardContent>
                            </Paper>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    image="https://static.wikia.nocookie.net/doblaje/images/9/93/Alice_la_gemela_del_diablo_portada.jpg"
                                    alt="Imagen"
                                />
                            </Paper>
                            <Paper>
                                <CardContent sx={{ p: 2 }}>
                                    <Typography  variant="subtitle2" color="#2196F3" fontWeight="bold">
                                        1hrs 50min
                                    </Typography>
                                    <Typography  sx={{ py: 1 ,my: '8px'}} variant="h6" color="black" fontWeight="bold">
                                        Alice:La Gemela del Diablo
                                    </Typography>
                                    <Box  sx={{mt:'16px',display: 'flex', gap: '8px' }} spacing={8}>
                                        <Chip label="Terror" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                                        <Chip label="+14" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    </Box>

                                </CardContent>
                            </Paper>
                        </Card>
                    </Grid>

                    
                    <Grid item md={4}>
                        <Card>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    image="https://imgmedia.larepublica.pe/640x947/larepublica/original/2024/01/04/6596cfe9366122339f192870.webp"
                                    alt="Imagen"
                                />
                            </Paper>
                            <Paper>
                                <CardContent sx={{ p: 2 }}>
                                    <Typography  variant="subtitle2" color="#2196F3" fontWeight="bold">
                                        2h 10min
                                    </Typography>
                                    <Typography  sx={{ py: 1 ,my: '8px'}} variant="h6" color="black" fontWeight="bold">
                                        Aquaman y el Reino perdido
                                    </Typography>
                                    <Box  sx={{mt:'16px',display: 'flex', gap: '8px' }} spacing={8}>
                                        <Chip label="Acción" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                                        <Chip label="+14" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    </Box>

                                </CardContent>
                            </Paper>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    image="https://via.placeholder.com/226x339"
                                    alt="Imagen"
                                />
                            </Paper>
                            <Paper>
                                <CardContent sx={{ p: 2 }}>
                                    <Typography  variant="subtitle2" color="#2196F3" fontWeight="bold">
                                        1hrs 40min
                                    </Typography>
                                    <Typography  sx={{ py: 1 ,my: '8px'}} variant="h6" color="black" fontWeight="bold">
                                        El Juego de la Muerte
                                    </Typography>
                                    <Box  sx={{mt:'16px',display: 'flex', gap: '8px' }} spacing={8}>
                                        <Chip label="Terror" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                                        <Chip label="+14" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    </Box>

                                </CardContent>
                            </Paper>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card>
                            <Paper>
                                <CardMedia
                                    component="img"
                                    image="https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001895?referenceScheme=HeadOffice&allowPlaceHolder=true"
                                    alt="Imagen"
                                />
                            </Paper>
                            <Paper>
                                <CardContent sx={{ p: 2 }}>
                                    <Typography  variant="subtitle2" color="#2196F3" fontWeight="bold">
                                        1h
                                    </Typography>
                                    <Typography  sx={{ py: 1 ,my: '8px'}} variant="h6" color="black" fontWeight="bold">
                                        Hablando Huevadas: Hijo D...
                                    </Typography>
                                    <Box  sx={{mt:'16px',display: 'flex', gap: '8px' }} spacing={8}>
                                        <Chip label="Comedia" variant="filled" color="default" style={{ padding: "4px" , borderRadius: "100px"}} />
                                        <Chip label="+14" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
                                    </Box>

                                </CardContent>
                            </Paper>
                        </Card>
                    </Grid>


                    
                </Grid>
            </Box>
        </Box>
    )
}

export default ContentMenuPelis