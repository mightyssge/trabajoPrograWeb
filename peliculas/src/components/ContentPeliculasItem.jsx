import React, { useState } from 'react';
import { Container, Box, Button, TextField, Divider, Stack, Grid, Card, Paper, Avatar, CardHeader } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import { blue, red } from '@mui/material/colors';
import '@fontsource/roboto'; 






const ContentPeliculasItem = () => {
 
  return (

    <Box flex={2} sx={{ p: 4 }} >
      <Typography variant="h4" component="div" sx={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
        Películas
      </Typography>

      <Box sx={{  padding: 4, mt: 5 }}>   
            <Grid  item  md={4} sx={{ mb:1 }} >
              <Typography variant="h4" sx={{ fontSize: "40px", fontFamily: "Roboto" }}  >Beekeeper Sentencia de Muerte</Typography>

              <Grid  sx={{ display: "flex" }}>
                <LocationOnIcon color="action" sx={{ marginRight: "15px", marginBottom: "20px", marginTop: "10px" }} ></LocationOnIcon>
                <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{ marginBottom: "20px", marginTop: "10px" }}>
                  1hrs 50min
                </Typography>
                <LocationOnIcon color='action' sx={{ marginLeft: "15px", marginRight: "15px", marginBottom: "20px", marginTop: "10px" }} ></LocationOnIcon>
                <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{ marginBottom: "20px", marginTop: "10px", fontFamily: "Roboto" }}>
                  Director
                </Typography>
              </Grid>
            </Grid>






      <Grid  display="flex" item>
  <Card >
    <Grid item md={4} sx={{ height: "100%", width: "100%" }}>
      <img
        src="https://i.ytimg.com/vi/J2pWkhP3ou0/maxresdefault.jpg"
        style={{ width: "100%", height: "100%" }}
      />
    </Grid>
  </Card>

  <Grid
    sx={{
      ml: { xs: 0, md: 5 },
      height: "100%",
      flexDirection: { xs: 'column', md: 'row' },
      width: { xs: '100%', md: 'auto' },
    }}
  >
    <Card sx={{ height: "100%", width: "100%" }}>
      <Grid sx={{ mr: { xs: 0, md: 3 } }}>
        <header typeof="title">
          <Typography variant="h5" style={{ margin: "8%" }}>
            Sinopsis
          </Typography>
        </header>

        <Typography
          variant="body1"
          style={{
            margin: "8%",
            fontSize: "16px",
            fontFamily: "Roboto",
          }}
        >
          La brutal campaña de venganza de un hombre adquiere dimensiones nacionales cuando se descubre que es un antiguo agente de una poderosa organización clandestina conocida como "Los apicultores".
        </Typography>

        <Box sx={{ mt: '16px', display: 'flex', gap: '8px', margin: "5%" }}>
          <Chip
            label="Accion"
            variant="filled"
            color="default"
            style={{ padding: "4px", borderRadius: "100px" }}
          />
          <Chip
            label="+14"
            variant="filled"
            color="default"
            style={{ padding: "4px", borderRadius: "100px" }}
          />
        </Box>
      </Grid>
    </Card>
  </Grid>
</Grid>

 

         {/* <Grid  display={"flex"}  item  md xs  >
   
            <Card sx={{width:"160%"}} >
             <Grid item md={4} sx={{ height:"100%",width:"100%"}} >
            <img
              src="https://i.ytimg.com/vi/J2pWkhP3ou0/maxresdefault.jpg"
              style={{width:"100%", height:"100%"}}
             />
              
              </Grid>
            </Card>
            
            <Grid>
              


            <Grid sx={{ml:5, height:"100%"}}>
            <Card sx={{ height:"100%", width:"79%"}} >
              <Grid sx={{mr:3 }}>

            <header typeof='title'>
              <Typography variant='h5' style={{margin:"8%" }} > Sinopsis</Typography>
            </header>

            <Typography variant='body1' style={{ margin: "8%",  fontSize: "16px", fontFamily: "Roboto" }}>
              La brutal campaña de venganza de un hombre adquiere dimensiones nacionales cuando se descubre que es un antiguo agente de una poderosa organización clandestina conocida como "Los apicultores".
            </Typography>
            <Box sx={{ mt: '16px', display: 'flex', gap: '8px', margin: "5%" }} >
              <Chip label="Accion" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
              <Chip label="+14" variant="filled" color="default" style={{ padding: "4px", borderRadius: "100px" }} />
            </Box>

            </Grid>

          </Card>

        </Grid>
        </Grid>
        </Grid>*/}
        

        <Grid style={{ paddingTop: "2%", width: "100%" }}item  md={4} >
          <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
            Salas disponibles
          </Typography>
        </Grid>



        <Box sx={{ mt: 10, width: "55%", height: "100%" }} >
          <Grid  style={{ }}item  md={4}>
            <Grid item  md={4}> 
              <Container style={{ width: "100%", height: "100%" }}>
                <Container style={{ display: "flex", marginBottom: "4%" }}>
                  <Avatar variant='square' >
                    <Typography >
                      S1
                    </Typography>

                  </Avatar>
                  <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                    Sala A
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
                      S2
                    </Typography>

                  </Avatar>
                  <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                    Sala B
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
                      S3
                    </Typography>

                  </Avatar>
                  <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", }}>
                    Sala C
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

export default ContentPeliculasItem;