import React from 'react'

function PeliculasDisponibles() {
  return (
    <Grid item md={4}>
            <Container style={{ width: "100%", height: "100%" }}>
              <Container style={{ display: "flex", marginBottom: "4%" }}>
                <Avatar variant='rounded' >
                  BS
                </Avatar>
                <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                  <b>Beekeeper Sentencia de Muerte</b>
                </Typography>
              </Container>
              <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </Typography>
            </Container>

            <Grid sx={{ display: "flex", ml: 4, mb: 5 }}>
              <Button
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
              </Button>

            </Grid>

          </Grid>
  )
}

export default PeliculasDisponibles