import { BASE_URL} from "./base_url";
import axios from "axios"
export const getAllArtist= async(names)=>{
    let Artist;
    let URL
    if(!names){
        URL = BASE_URL+"/authors"
    }
    else{
        URL = BASE_URL+`/authors/?names=${names}`
    }
    await axios.get(URL)
    .then(res=>{
        Artist=res.data
    })
    return Artist
    
}
export const getArtistById= async(id)=>{
    let Artists;
    await axios.get(`${BASE_URL}/authors/${id}`)
    .then(res=>{
        Artists=res.data
    })
    return Artists
}
export const deleted = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/authors/${id}`).then(res=>{
        message = res.data
    })
    return message
}
export const posted=(payload)=>{
    axios.post(`${BASE_URL}/authors`,payload)
}
export const editing=(id,payload)=>{
    axios.put(`${BASE_URL}/authors.${id}`,payload)
}