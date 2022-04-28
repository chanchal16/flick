import axios from "axios"

// get videos from likes
const getLikedVideos =async (token,LikeDispatch)=>{
    try{
        axios.get("/api/user/likes", {
            headers: { authorization: token }
         })
         .then(res=>{
            LikeDispatch({type:'INIT',payload:res.data.likes})
        })
    }catch(err){
        console.error('Could not load videos',err)
    }
}

// add to likes
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - video to be removed from likes
const addToLikes =async (token,LikeDispatch,video)=>{
    try{
        await axios.post('/api/user/likes',{video},
        {
            headers:{authorization:token}
        },)
        .then(res=>{
            LikeDispatch({type:'UPDATE_LIKES',payload:res.data.likes})
        })
    }catch(err){
        console.error('Not able to add video to watch later',err)
    }
}

// remove from likes
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - video to be removed from likes
const removeFromLikes =async (token,LikeDispatch,videoId)=>{
    try{
        await axios.delete(`/api/user/likes/${videoId}`,{
            headers:{authorization:token}
        })
        .then(res=>{
            LikeDispatch({type:'UPDATE_LIKES',payload:res.data.likes})
        })
    }catch(err){       
        console.error("Can't remove video from watchlater",err)
    }
}
export {getLikedVideos,addToLikes,removeFromLikes}