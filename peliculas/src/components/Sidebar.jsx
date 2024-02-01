import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StarIcon from '@mui/icons-material/Star';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import { Link } from "react-router-dom"
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {  useNavigate } from 'react-router-dom'

function Sidebar() {

    const navigate= useNavigate()

    const peliculasOnClick = () => {
        navigate( "/peliculas")
    }

    const salasOnClick = () => {
        navigate( "/salas")
    }



    return (
        <><img src={"https://www.qschina.cn/sites/default/files/profiles/logos/universidad-de-lima_592560cf2aeae70239af5157_large.jpg"} alt="Logo Ulima" style={{ width: 128, height: 127, marginLeft: 51, marginRight: 51, marginTop: 24 }} /><TextField
            label="Busca"
            variant="outlined"
            margin="normal"
            sx={{ mx: 2 }} /><List>


                
                    <ListItem key={'Peliculas'} disablemx sx={{ display: 'block' }} onClick={peliculasOnClick}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent:  'initial' ,
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr:  3,
                                    justifyContent: 'center',
                                }}
                            >
                                <StarIcon color="grey" />
                            </ListItemIcon>
                            <ListItemText primary={'Peliculas'} sx={{ opacity:  1 , color: 'grey', textDecoration: 'none' }} />
                        </ListItemButton>
                    </ListItem>
                


                
                    <ListItem key={'Salas'} disablemx sx={{ display: 'block' }} onClick={salasOnClick}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent:  'initial'  ,
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr:  3 ,
                                    justifyContent: 'center',
                                }}
                            >
                                <StarIcon color="grey" />
                            </ListItemIcon>
                            <ListItemText primary={'Salas'} sx={{ opacity:   1 , color: 'grey', textDecoration: 'none' }} />
                        </ListItemButton>
                    </ListItem>
                


            </List></>


    )
}

export default Sidebar