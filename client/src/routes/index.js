import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home";
import Artist from "../pages/Artist";
import AddArtist from "../pages/AddArtist";

import ArtistDetail from "../pages/ArtistDetail";


export const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/artist',
                element: <Artist/>
            },
            {
                path: '/artist/:id',
                element:<ArtistDetail/>
            },
          
            {
                path: '/artist/add',
                element: <AddArtist/>
            },
         
        ]
    }
]