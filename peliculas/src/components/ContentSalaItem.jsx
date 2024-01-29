import React, { useState } from 'react';
import { Container, Box, Button, TextField, Divider, Stack, Grid, Card, Paper,Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

const ContentSalaItem = () => {

  return (
    
       <Box  flex={7} sx={{ p: 4  }} >
            <Typography  variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px' , borderBottom: '1px solid rgb(224, 224, 224)'}}>
                Salas
            </Typography>

        <Box  sx={{ mt: 4, padding: '0px 24px 0 24px', mr: 2, width:"95%", height:"1057px", mt:5 }}>
         <Container >
          <header>
            <Box >
            <Typography variant="h4" sstyle={{ fontSize: "40px", fontFamily: "Roboto"}}  >Sala A</Typography>

            <Grid style={{display:"flex"}}>
              <LocationOnIcon color="action" style={{ marginRight: "15px",marginBottom:"20px", marginTop:"10px" }} ></LocationOnIcon>
              <Typography  variant="subtitle2" color="#2196F3" fontWeight="600" style={{marginBottom:"20px", marginTop:"10px"}}>
               Pabellon A-ULima
              </Typography>
                
            </Grid>
            </Box>
          </header>
         </Container>


         <Grid display={"flex"} style={{width:"100%", height:"340px"}}   >
          <Card sx={{marginRight:"6%"}} style={{width:"700px", height:"340px"}}> 
            
            <img
      src="https://www.ulima.edu.pe/sites/default/files/styles/600x300/public/news/gallery/pabellon_f1_y_f2_terraza_primer_pisot.jpg?itok=rWDxDSXS"
      style={{width:"700px",height:"100%"  }}/>
           
            </Card>

            <Card style={{width:"320px", height:"530px"}}>
              
              <header >
                <Typography variant='h5' style={{margin:"6%"}} > Historia</Typography>
                </header>

                <Typography variant='body1' style={{margin:"8%", paddingRight:"0px", fontSize:"16px",fontFamily: "Roboto"}}>
                La Facultad de Comunicación tiene tres estudios, los cuales son sets profesionales que se utilizan para televisión, streaming y diversas realizaciones audiovisuales. Cada uno de ellos está equipado con tres cámaras de video digitales full HD, switcher digital, pantallas de monitoreo tanto en Control y Estudio, dos tituladores y grabadoras/reproductoras de video. El sonido comprende: consola de audio, micrófonos de mano, de pecho, boom y de vincha. El sistema de iluminación trabaja con control de iluminación, luces alógenas de varios tipos: Fresnel, Scoop, Broad, Cañón, además del rack de control técnico con instrumentos de medición.                </Typography>
                
                
            </Card>
         
          </Grid>

          <Grid style={{ paddingTop:"2%",width:"100%", height:"58px", paddingBottom:"3%" }}>
          <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
         Peliculas Disponibles
        </Typography>
          </Grid>

      

          <Box sx={{ mt:10, width:"30%", height:"1057px" }} >
           <Grid style={{marginBottom:"18%"}}>
             <Grid> 
             <Container  style={{width:"520px", height:"96px"}}>
               <Container style={{display:"flex", marginBottom:"16px"}}>
                 <Avatar  variant='square' >
               <Typography >
                 BS
               </Typography>
 
                 </Avatar>
                 <Typography  variant='h6' style={{marginLeft:"2%", marginTop:"5px",fontFamily: "Roboto"}}>
                 Beekeeper Sentencia de Muerte
               </Typography>
               </Container>
               
               <Typography  variant='body1' style={{marginLeft:"5%",fontFamily: "Roboto"}}>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
               </Typography>
               </Container>

               <Grid sx={{display:"flex"}}>
               <Box

          sx={{
            marginTop:'40px',
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
          <Typography variant="h5" style={{ fontSize:'12px', color:"rgba(151, 71, 255, 1)" }}>15:00</Typography>
        </Box>

        <Box

          sx={{
            marginTop:'40px',
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
          <Typography variant="h5" style={{ fontSize:'12px', color:"rgba(151, 71, 255, 1)" }}>17:00</Typography>
        </Box>
                
               </Grid>
 
              
 
             </Grid>
 
           </Grid>

           <Grid style={{marginBottom:"18%"}}>
             <Grid> 
             <Container  style={{width:"520px", height:"96px"}}>
               <Container style={{display:"flex", marginBottom:"16px"}}>
                 <Avatar  variant='square' >
               <Typography >
                 NG
               </Typography>
 
                 </Avatar>
                 <Typography  variant='h6' style={{marginLeft:"2%", marginTop:"5px",fontFamily: "Roboto"}}>
                 El niño y la Garza
               </Typography>
               </Container>
               
               <Typography  variant='body1' style={{marginLeft:"5%",fontFamily: "Roboto"}}>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
               </Typography>
               </Container>

               <Grid sx={{display:"flex"}}>
               <Box

          sx={{
            marginTop:'40px',
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
          <Typography variant="h5" style={{ fontSize:'12px', color:"rgba(151, 71, 255, 1)" }}>17:00</Typography>
        </Box>

        <Box

          sx={{
            marginTop:'40px',
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
          <Typography variant="h5" style={{ fontSize:'12px', color:"rgba(151, 71, 255, 1)" }}>18:00</Typography>
        </Box>
                
               </Grid>
 
              
 
             </Grid>
 
           </Grid>

           <Grid style={{marginBottom:"18%"}}>
             <Grid> 
             <Container  style={{width:"520px", height:"96px"}}>
               <Container style={{display:"flex", marginBottom:"16px"}}>
                 <Avatar  variant='square' >
               <Typography >
                 JC
               </Typography>
 
                 </Avatar>
                 <Typography  variant='h6' style={{marginLeft:"2%", marginTop:"5px",fontFamily: "Roboto"}}>
                 Jack en la caja Maldita 3
               </Typography>
               </Container>
               
               <Typography  variant='body1' style={{marginLeft:"5%",fontFamily: "Roboto"}}>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
               </Typography>
               </Container>

               <Grid sx={{display:"flex"}}>
               <Box

          sx={{
            marginTop:'40px',
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
          <Typography variant="h5" style={{ fontSize:'12px', color:"rgba(151, 71, 255, 1)" }}>20:00</Typography>
        </Box>

        <Box

          sx={{
            marginTop:'40px',
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
          <Typography variant="h5" style={{ fontSize:'12px', color:"rgba(151, 71, 255, 1)" }}>22:00</Typography>
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
