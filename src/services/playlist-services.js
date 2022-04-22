import axios from "axios"

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
        await axios.post('/api/user/playlists',{playlist:{title}},
        {
            headers:{authorization:token}
        },)
        .then(res=>{
            playlistDispatch({type:'CREATE_PLAYLIST',payload:res.data.playlists})
        })
    }catch(err){
        console.error('Not able to add video to playlist',err)
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
            return res.data.playlists
        })
    }catch(err){       
        console.error("Can't remove video from playlist",err)
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
        })
    }catch(err){
        console.error('Not able to add video to playlist',err)
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
            playlistDispatch({type:'UPDATE_PLAYLIST',payload:res.data.playlist})
        })
    }catch(err){       
        console.error("Can't remove video from playlist",err)
    }
}
export {getAllPlaylists,createPlaylist,deletePlaylist,getPlaylist,addVideoToPlaylist,removeVideoFromPlaylist}