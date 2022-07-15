import axios from "axios";
import { toast } from "react-toastify";

// get videos from history
const getHistory =async (token,historyDispatch)=>{
    try{
        axios.get("/api/user/history", {
            headers: { authorization: token }
         })
         .then(res=>{
            historyDispatch({type:'INIT',payload:res.data.history});
        })
    }catch(err){
        console.error('Could not load videos',err)
    }
}

// add to history
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - video to be removed from history
const addToHistory =async (token,historyDispatch,video)=>{
    try{
        await axios.post('/api/user/history',{video},
        {
            headers:{authorization:token}
        },)
        .then(res=>{
            historyDispatch({type:'UPDATE_HISTORY',payload:res.data.history})
        })
    }catch(err){
        console.error('Not able to add video to history',err)
    }
}

// remove from history
// @params - token stored in localstorage
// @params - dispatch method from reducer
// @params - video to be removed from history
const removeFromHistory =async (token,historyDispatch,videoId)=>{
    try{
        await axios.delete(`/api/user/history/${videoId}`,{
            headers:{authorization:token}
        })
        .then(res=>{
            historyDispatch({type:'UPDATE_HISTORY',payload:res.data.history});
            toast.success('video removed successfully')
        })
    }catch(err){       
        console.error("Can't remove video from history",err);
        toast.error("can't remove video" )
    }
}

// clear history
// @params - token stored in localstorage
// @params - dispatch method from reducer
export const clearHistory = async (token,historyDispatch) => {
    try {
      await axios.delete(`/api/user/history/all`,{
        headers:{authorization:token}
    })
    .then(res=>{
        historyDispatch({type:'CLEAR_HISTORY',payload:res.data.history})
        toast.success('History cleared successfully!')
    })
    } catch (error) {
      toast.error("Failed to clear history");
    }
  };
export {getHistory,addToHistory,removeFromHistory}