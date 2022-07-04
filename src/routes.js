import {Liked,Home,History,Login,Playlists,Signup,SinglePlaylist,Video,VideoListing, WatchLater } from "./pages";
import {RequireAuth,PageNotFound} from './components/common/'

const ROUTES = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"videos",
        element:<VideoListing/>
    },
    {
        path:"videos/:videoId",
        element:<Video/>
    },
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"signup",
        element:<Signup/>
    },
    {
        path:'/',
        element:<RequireAuth/>,
        children:[
            {
                path:"watchlater",
                element:<WatchLater/>
            },
            {
                path:"playlists",
                element:<Playlists/>
            },
            {
                path:"playlists/:playlistId",
                element:<SinglePlaylist/>
            },
            {
                path:"liked",
                element:<Liked/>
            },
            {
                path:"history",
                element:<History/>
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]
export {ROUTES}