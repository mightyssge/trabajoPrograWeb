import { Button, TextField, Typography, Box, Icon, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
const CardImageReserva=({ peliculaActual})=>{
    return <Box sx={{
        width: 'auto',
        height: 'auto',
        borderRadius: '4px',
        padding: '0px',
        marginLeft: '-10px'
    }}>
        <Paper sx={{
            borderRadius: '0', 
            padding: '20px', 
            boxShadow: 'none', 
        }}>
            <img
                src={peliculaActual.thumbnail}
                alt="Imagen"
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </Paper>
    </Box>


}
export default CardImageReserva