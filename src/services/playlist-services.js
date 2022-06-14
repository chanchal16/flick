import axios from "axios";
import { toast } from "react-toastify"

// get all playlists
const getAllPlaylists =async (token,playlistDispatch)=>{
    try{
        axios.get("/api/user/playlists", {
            headers: { authorization: token }
         })
         .then(res=>{
            playlistDispatch({type:'INIT',payload:res.data.playlists})
        })
    }catch(err){
        console.error('Could not load videos',err)
    }
}

// create playlist
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - playlist to be created
const createPlaylist =async (token,playlistDispatch,title)=>{
    try{
        const{data:{playlists}}= await axios.post('/api/user/playlists',{playlist:{title}},
        {
            headers:{authorization:token}
        },)
        playlistDispatch({type:'CREATE_PLAYLIST',payload:playlists})
        toast.success('Playlist created successfully!')
        // find the newly created playlist nd return its id 
        const found = playlists.find(pl=>pl.title === title)
        return found._id
    }catch(err){
        console.error('cannot create a playlist',err);
        toast.error("Can't create playlist")
    }
}

// remove from playlist
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - playlist to be removed from playlist
const deletePlaylist =async (token,playlistDispatch,playlistId)=>{
    try{
        await axios.delete(`/api/user/playlists/${playlistId}`,{
            headers:{authorization:token}
        })
        .then(res=>{
            playlistDispatch({type:'DELETE_PLAYLIST',payload:playlistId})
            toast.success("Playlist deleted successfully!")
            return res.data.playlists            
        })
    }catch(err){       
        console.error("Can't remove video from playlist",err);
        toast.error("Can't delete playlist")
    }
}
// get playlist from playlists
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - playlistId of the playlist
const getPlaylist = async(token,playlistDispatch,playlistId)=>{
    try{
        await axios.get(`/api/user/playlists/${playlistId}`,{
            headers:{authorization:token}
        })
        .then(res=>{
            playlistDispatch({type:'INIT',payload:res.data.playlist})
        })
    }catch(err){       
        console.error("Can't fetch the playlist",err)
    }
}
// add video to playlist
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - video to be added
// @params - playlistId of the playlist
const addVideoToPlaylist =async (token,playlistDispatch,video,playlistId)=>{
    try{
        await axios.post(`/api/user/playlists/${playlistId}`,{video},
        {
            headers:{authorization:token}
        },)
        .then(res=>{
            playlistDispatch({type:'UPDATE_PLAYLIST',payload:res.data.playlist})
            toast.success('Video added to playlist')
        })
    }catch(err){
        console.error('Not able to add video to playlist',err)
        toast.error("Can't add video to playlist")
    }
}
// remove video from playlist
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - id of video to be removed
// @params - playlistId of the playlist
const removeVideoFromPlaylist = async(token,playlistDispatch,videoId,playlistId)=>{
    try{
        await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,{
            headers:{authorization:token}
        })
        .then(res=>{
            playlistDispatch({type:'UPDATE_PLAYLIST',payload:res.data.playlist});
            toast.success('Video removed from playlist')
        })
    }catch(err){       
        console.error("Can't remove video from playlist",err);
        toast.error("Can't remove video")
    }
}
export {getAllPlaylists,createPlaylist,deletePlaylist,getPlaylist,addVideoToPlaylist,removeVideoFromPlaylist}