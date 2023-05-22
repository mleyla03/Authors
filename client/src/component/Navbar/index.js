import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Style from "./index.module.css"
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{background:'linear-gradient(90deg, rgba(151,0,158,1) 0%, rgba(202,29,227,0.9780287114845938) 40%, rgba(231,0,255,1) 100%)', width:"100%", height:"70px"}} position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Authors
          </Typography>
          <Link className={Style.links} style={{textDecoration:"none"}} to="/"><Button style={{color:'white',marginRight:'10px'}} color="success"  variant='outlined'>Home</Button></Link>
          <Link className={Style.links} style={{textDecoration:"none"}} to="/artist"><Button style={{color:'white',marginRight:'10px'}} color="success"  variant='outlined'>Artist</Button></Link>
          <Link className={Style.links} style={{textDecoration:"none"}} to="/artist/add"><Button style={{color:'white'}} color="success"  variant='outlined'>Add Artist</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar
