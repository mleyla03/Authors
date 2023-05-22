const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express()
const mongoose = require('mongoose');
const dotenv= require("dotenv")
const crypto = require('crypto');
dotenv.config()
app.use(cors());
app.use(bodyParser.json());
app.get('/api', (req, res) => {
  res.send('Hello World!')
})

const AuthorsSchema= new mongoose.Schema({
        names: String,
        birthYear: Number,
        gender: String,
        isGender:Boolean,
        imageURL: String

})
const  AuthorsModel= new mongoose.model('Authors',AuthorsSchema)


app.get("/api/authors", async(req,res)=>{
   
    const { names } = req.query;
    const authors = await AuthorsModel.find();
    if (!names) {
      res.status(200).send(authors);
    } else {
      const searchedAuthors = authors.filter((x) =>
        x.names.toLowerCase().trim().includes(names.toLowerCase().trim())
      );
      res.status(200).send(searchedAuthors);
    }
})
app.get("/api/authors/:id", async(req, res) => {
    const { id } = req.params;
    const author = await AuthorsModel.findById(id)
    res.status(200).send(author);
  });
app.delete("/api/authors/:id",async(req,res)=>{
   const id=req.params.id
   const deleteArtist = await AuthorsModel.findByIdAndDelete(id);
  
   res.status(203).send({
     message: `${deleteArtist.name} deleted successfully!`,
   });
})
app.post("/api/authors", async (req, res) => {
    const { names, birthYear,gender, imageURL,isGender } = req.body;
    const newArtist = new AuthorsModel({
      names: names,
      birthYear: birthYear,
      gender:gender,
      isGender: isGender,
      imageURL: imageURL,
    });
    await newArtist.save();
    res.status(201).send({
      message: `${newArtist.names} posted successfully`,
      payload: newArtist,
    });
  });
app.put("/api/authors/:id", (req,res)=>{
    const id =req.params.id
    const{names,birthYear,gender,imageURL,isGender} = req.body;
    const editing= Author.find((x)=>x.id==id)
    if(names){
        editing.names=names
    }
    if(birthYear){
        editing.birthYear=birthYear
    }
    if(gender){
      editing.gender=gender
    }
   if(isGender){
    editing.isGender=isGender
   }
    if(imageURL){
        editing.imageURL=imageURL
    }
    res.status(200).send(`${editing.names} editing successfully!`)
})
port=process.env.port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNETION = process.env.DB_CONNETION;

mongoose.connect(DB_CONNETION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("Mongo DB connected!");
});