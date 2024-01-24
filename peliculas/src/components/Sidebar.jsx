import React from "react";
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

const Sidebar = () => {
    return (
        //de querer revisar los limites usar bgcolor="pink" 
        <Box flex={1} p={2} alignItems="center">
            <img src={"https://www.qschina.cn/sites/default/files/profiles/logos/universidad-de-lima_592560cf2aeae70239af5157_large.jpg"} alt="Logo Ulima" style={{ width: 128, height: 127, marginLeft: 51, marginRight: 51 }} />
            <TextField
                label="Busca"
                variant="outlined"
                margin="normal"
                fullWidth="true"
                
            />

            <List>
                <ListItem>
                    <ListItemIcon>
                        <StarIcon color="grey" />
                    </ListItemIcon>
                    <ListItemText primary="Películas" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarIcon color="grey" />
                    </ListItemIcon>
                    <ListItemText primary="Salas" />
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar