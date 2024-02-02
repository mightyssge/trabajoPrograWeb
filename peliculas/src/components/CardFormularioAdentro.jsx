
import { Button, TextField, Typography, Box, Icon, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const CardFormularioAdentro=( { peliculaActual})=>{
    return <Box>
         <Typography variant="h5" component="div" gutterBottom>
                                        Información de reserva
                                    </Typography>
                                    <Typography variant="h6" component="div" gutterBottom style={{ borderBottom: '1px solid rgb(224, 224, 224)' }}>
                                        {peliculaActual.horarioSeleccionado}
                                    </Typography>
    </Box>
}
export default CardFormularioAdentro