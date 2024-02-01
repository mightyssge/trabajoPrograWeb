
import { Box, Grid, Typography, Card, Chip } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';


const DetalleSalasDispo=()=>{
    return ( 

       
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
        
    )

}
export default DetalleSalasDispo