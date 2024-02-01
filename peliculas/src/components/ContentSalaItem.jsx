import React, { useState } from 'react';
import { Container, Box, Button, TextField, Divider, Stack, Grid, Card, Paper, Avatar, CardHeader} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import { blue, red } from '@mui/material/colors';



const ContentSalaItem = () => {


  return (

    <Box flex={2} sx={{ p: 4 }} >
      <Typography variant="h4" component="div" sx={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
        Salas
      </Typography>

      <Box sx={{  padding: 5, mt: 5 }}>   

            <Grid  item  md={4} sx={{ mb:1 }} >
              <Typography variant="h4" sx={{ fontSize: "40px", fontFamily: "Roboto" }}  >SALA A</Typography>

              <Grid  sx={{ display: "flex" }}>
                <LocationOnIcon color="action" sx={{ marginRight: "15px", marginBottom: "20px", marginTop: "10px" }} ></LocationOnIcon>
                <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{ marginBottom: "20px", marginTop: "10px" }}>
                  Pabellon A-ULima
                </Typography>
              </Grid>
            </Grid>



        <Grid  display={"flex"}  item  md xs  sx={{ height:600}} >
   
            <Card sx={{width:"500%",height:"50%"}} >
             <Grid item md={4} sx={{ height:"100%",width:"100%"}} >
            <img
              src="https://www.ulima.edu.pe/sites/default/files/styles/600x300/public/news/img/agenda-2-foromejoracontinua-may2022_0.jpg?itok=Z3bSJtG3"
              style={{width:"100%", height:"100%"}}
             />
              
              </Grid>
            </Card>
            
            <Grid>
              


            <Grid sx={{ml:5, height:"100%", }} item  md xs>
            <Card sx={{ height:"100%",width:"80%" }} >
              <Grid sx={{ }}item  md xs>

            <header typeof='title'>
              <Typography variant='h5' style={{margin:"8%" }} > Historia</Typography>
            </header>

            <Typography variant='body1' style={{ marginLeft:"4%",  fontSize: "16px", fontFamily: "Roboto", marginRight:"22%", paddingLeft:"4%" }}>
            La Facultad de Comunicación tiene tres estudios, los cuales son sets profesionales que se utilizan para televisión, streaming y diversas realizaciones audiovisuales. Cada uno de ellos está equipado con tres cámaras de video digitales full HD, switcher digital, pantallas de monitoreo tanto en Control y Estudio, dos tituladores y grabadoras/reproductoras de video. El sonido comprende: consola de audio, micrófonos de mano, de pecho, boom y de vincha. El sistema de iluminación trabaja con control de iluminación, luces alógenas de varios tipos: Fresnel, Scoop, Broad, Cañón, además del rack de control técnico con instrumentos de medición.

            </Typography>
            </Grid>

          </Card>

        </Grid>
        </Grid>
        </Grid>
        
       <Grid style={{ paddingTop: "2%", width: "100%" }}item  md={4} >
          <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
            Peliculas disponibles
          </Typography>
        </Grid>



        <Box sx={{ mt: 10, width: "70%", height: "140%" }} >
          <Grid  style={{ }}item  md={4}>
            <Grid item  md={4}> 
              <Container style={{ width: "100%", height: "100%" }}>
                <Container style={{ display: "flex", marginBottom: "4%" }}>
                  <Avatar variant='square' >
                    <Typography >
                      BS
                    </Typography>

                  </Avatar>
                  <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                    Beekeeper Sentencia de Muerte
                  </Typography>
                </Container>

                <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </Container>

              <Grid sx={{ display: "flex", ml:4, mb:5 }}>
                <Box

                  sx={{
                    marginTop: '40px',
                    width: '80px',
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
                  <Link to={'/peliculasReserva/:id'}><Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>15:00</Typography></Link>
                </Box>

                <Box

                  sx={{
                    marginTop: '40px',
                    width: '80px',
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
                  <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>17:00</Typography>
                </Box>

              </Grid>



            </Grid>

          </Grid>

          <Grid style={{ marginBottom: "18%" }}>
            <Grid item  md={4}>
              <Container style={{width: "100%", height: "100%"  }}>
                <Container style={{ display: "flex", marginBottom: "16px" }}>
                  <Avatar variant='square' >
                    <Typography >
                      NG
                    </Typography>

                  </Avatar>
                  <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                    El Niño y la Garza
                  </Typography>
                </Container>

                <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </Container>

              <Grid sx={{ display: "flex",ml:4, mb:5 }}>
                <Box

                  sx={{
                    marginTop: '40px',
                    width: '80px',
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
                  <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>17:00</Typography>
                </Box>

                <Box

                  sx={{
                    marginTop: '40px',
                    width: '80px',
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
                  <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>18:00</Typography>
                </Box>

              </Grid>



            </Grid>

          </Grid>

          <Grid style={{ marginBottom: "18%" }}>
            <Grid>
              <Container style={{ width: "100%", height: "100%"  }}>
                <Container style={{ display: "flex", marginBottom: "16px" }}>
                  <Avatar variant='square' >
                    <Typography >
                      JC
                    </Typography>

                  </Avatar>
                  <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", }}>
                    Jack en la caja Maldita 3
                  </Typography>
                </Container>

                <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </Container>

              <Grid sx={{ display: "flex",ml:4, mb:5 }}>
                <Box

                  sx={{
                    marginTop: '40px',
                    width: '80px',
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
                  <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>20:00</Typography>
                </Box>

                <Box

                  sx={{
                    marginTop: '40px',
                    width: '80px',
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
                  <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>22:00</Typography>
                </Box>

              </Grid>



            </Grid>

          </Grid>




        </Box>
      </Box >

    </Box>



  );
};

export default ContentSalaItem;