"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Navbar(){
    const[open, setOpen]= React.useState(false);

    const toggleDrawer= (state)=>()=>{
        setOpen(state);
    };

    const navItems= ["Home", "Skills", "Projects", "Contact"];

    return(
        <>
        <AppBar position="fixed" sx={{backgroundColor:"#0d1117"}}>
            <Toolbar>
             <Typography variant="h6" sx={{flexGrow:1, fontWeight:"bold", cursor:"pointer"}}>
                Prajwal P
             </Typography>

             <Box sx={{display:{xs:"none", md:"block"}}}>
                {navItems.map((item)=>(
                    <Button key={item} sx={{color:"fff"}}>
                        {item}
                    </Button>
                ))}
             </Box>

             <IconButton sx={{display:{xs:"block", md:"none"}, color:"#fff"}}
              onClick={toggleDrawer(true)}>
                <MenuIcon/>
             </IconButton>
            </Toolbar>
        </AppBar>

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box sx={{width:200}} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    {navItems.map((item)=>{
                        <ListItem key={item} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={item}/>
                            </ListItemButton>
                        </ListItem>
                    })}
                </List>
            </Box>

        </Drawer>
        </>
    )
}

