import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Button, Grid,Typography } from "@mui/material";
import { Card } from "antd";
import { getArtistById } from '../api/artistRequest'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ArtistDetail = () => {
  

  const{id} = useParams()
  const[artist,setArtist] = useState({});
  const navigate = useNavigate();
  useEffect(()=>{
    getArtistById(id).then(res=>{
      setArtist(res);
    })
  },[id]);




  return (
   <div style={{width:'90%',margin:'50px auto'}}>
     <Grid container style={{display:'flex',justifyContent:'center'}}>
      <Grid item lg={3} md={12} xs={12} sm={12} >
      <Card
        hoverable
        cover={
          <img
            style={{
              height: "300px",
              objectFit: "cover",
              objectPosition: "top center",
            }}
            alt="example"
            src={artist.imageURL}
          />
        }
      >
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
        <Typography style={{marginBottom:'7px'}}>{artist.names}</Typography>
        <Typography style={{marginBottom:'7px'}}>{artist.birthYear}</Typography>
        <Typography style={{marginBottom:'7px'}}>{artist.gender}</Typography>
        </div>
        <Button style={{height:"50px"}} variant="contained" color="success" onClick={()=>{
          navigate('/artist');
        }}>Go Back</Button>
      </div>
      </Card>
      
      </Grid>
     </Grid>
   </div>
   
  )
}

export default ArtistDetail