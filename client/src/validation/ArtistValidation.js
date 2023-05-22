import * as Yup from 'yup';

export const ArtistSchema = Yup.object().shape({

    birthYear: Yup.number().min(17).required("birthyear is required"),
    imageURL: Yup.string().required("image is required"),
    names: Yup.string().required("names is required"),
    gender:Yup.string().required("gender is gender")
    
    
})