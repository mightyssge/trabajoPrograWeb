import React from 'react'

function sidebar() {
    return (
        <><img src={"https://www.qschina.cn/sites/default/files/profiles/logos/universidad-de-lima_592560cf2aeae70239af5157_large.jpg"} alt="Logo Ulima" style={{ width: 128, height: 127, marginLeft: 51, marginRight: 51, marginTop: 24 }} /><TextField
            label="Busca"
            variant="outlined"
            margin="normal"
            sx={{ mx: 2 }} /><List>


                <Link to={"/"}>
                    <ListItem key={'Peliculas'} disablemx sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <StarIcon color="grey" />
                            </ListItemIcon>
                            <ListItemText primary={'Peliculas'} sx={{ opacity: open ? 1 : 0, color: 'grey', textDecoration: 'none' }} />
                        </ListItemButton>
                    </ListItem>
                </Link>


                <Link to={"salaIndex"}>
                    <ListItem key={'Salas'} disablemx sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <StarIcon color="grey" />
                            </ListItemIcon>
                            <ListItemText primary={'Salas'} sx={{ opacity: open ? 1 : 0, color: 'grey', textDecoration: 'none' }} />
                        </ListItemButton>
                    </ListItem>
                </Link>


            </List></>
    )
}

export default sidebar