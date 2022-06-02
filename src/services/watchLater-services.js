import axios from "axios";
import { toast } from "react-toastify"

// get videos from watchlater
const getVideosFromWatchLater =async (token,watchlaterDispatch)=>{
    try{
        axios.get("/api/user/watchlater", {
            headers: { authorization: token }
         })
         .then(res=>{
            watchlaterDispatch({type:'GET_WATCHLATER_VIDEOS',payload:res.data.watchlater})
        })
    }catch(err){
        console.error('Could not load videos',err)
    }
}

// add to watchlater
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - video to be removed from watchlater
const addToWatchLater =async (token,watchlaterDispatch,video)=>{
    try{
        await axios.post('/api/user/watchlater',{video},
        {
            headers:{authorization:token}
        },)
        .then(res=>{
            watchlaterDispatch({type:'UPDATE_WATCHLATER',payload:res.data.watchlater});
            toast.success('Video added to watchlater')
            
        })
    }catch(err){
        console.error('Not able to add video to watch later',err);
        toast.error("Can't add video")
    }
}

// remove from watchlater
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - video to be removed from watchlater
const removeFromWatchLater =async (token,watchlaterDispatch,videoId)=>{
    try{
        await axios.delete(`/api/user/watchlater/${videoId}`,{
            headers:{authorization:token}
        })
        .then(res=>{
            watchlaterDispatch({type:'UPDATE_WATCHLATER',payload:res.data.watchlater})
            toast.success('Video removed from watchlater')
        })
    }catch(err){       
        console.error("Can't remove video from watchlater",err);
        toast.error("Can't remove video")
    }
}
export {getVideosFromWatchLater,addToWatchLater,removeFromWatchLater}