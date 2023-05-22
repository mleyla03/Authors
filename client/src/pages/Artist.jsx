import React, { useEffect} from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Card } from "antd";
import { useFormik } from 'formik';
import { useArtistContext } from "../context/ArtistContext";
import { Link } from "react-router-dom"
import { ArtistSchema } from "../validation/ArtistValidation";
import Swal from "sweetalert2"
import {deleted , getAllArtist } from "../api/artistRequest";

const Artist = () => {
  const[artists,setArtists] = useArtistContext();

  useEffect(()=>{
    getAllArtist().then(res=>{
      setArtists(res);
    })
  },[setArtists])
  function handleDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleted(id);
        setArtists(artists.filter((x)=>x._id!==id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  const formik=useFormik({
    initialValues:{
     
      position:"",
    },
   
    validationSchema:ArtistSchema,
  })

  return (
    <div style={{ width: "80%", margin: "50px auto" }}>
      <div style={{display:'flex',alignItems:'baseline'}}>
      <TextField onChange={(e)=>{
        getAllArtist(e.target.value).then(res=>{
          setArtists(res);
        })
     }} style={{marginBottom:'15px', marginTop:"80px"}} id="outlined-basic" label="Search Artist" variant="outlined" />
        
      </div>
      <Grid  container spacing={2}>
        {artists && artists.map((artist)=>{
             <select name="position" value={formik.values.position} onChange={formik.handleChange}  >
           
             <option value='az'>Developer</option>
             
             <option value='ru'>Supervisor</option>
            
             
         </select>
          return <Grid key={artist._id} item lg={3} md={6} sm={12} xs ={12}>
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
            <Typography style={{marginBottom:'7px'}}><Link to={`/artist/${artist._id}`}>{artist.names}</Link></Typography>
            <Typography style={{marginBottom:'7px'}}>{artist.birthYear}</Typography>
            <Typography style={{marginBottom:'7px'}}>{artist.gender}</Typography>
            <Typography style={{marginBottom:'7px'}}>{artist.isGender}</Typography>
            </div>
            <div>
            <Button onClick={()=>handleDelete(artist._id)} variant="contained" color="error">Delete</Button>
            </div>
            
          </div>
          </Card>
        </Grid>
        })}
      </Grid>
    </div>
  );
};

export default Artist;