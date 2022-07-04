import React from 'react';
import { Link } from 'react-router-dom';
import {MdPlaylistAdd,MdOutlineWatchLater} from 'react-icons/md'
import { usePlaylist,useAuth } from '../contexts/MainProvider';
import { addToWatchLater, removeFromWatchLater } from '../services/watchLater-services';
import { checkIfExists } from '../Utils/check-if-exists';
import { addToHistory } from '../services/history-services';
import { toast } from "react-toastify"

export function VideoCard({video}) {
    const {token,user} = useAuth();
    const {playListState,playListDispatch,setIsModalOpen,setSelectedVideo} = usePlaylist();   
    
    const watchLaterHandler = async()=>{
        if(user?._id){
            if(checkIfExists(playListState.watchlater,video._id)){
                await removeFromWatchLater(token,playListDispatch,video._id)     
            }else{
                await addToWatchLater(token,playListDispatch,video)
            }
        }else{
            toast.error('Please log in')
        }
    }

    const openModal = ()=>{
        setIsModalOpen(true);
        setSelectedVideo(video)
    }
    
  return (
    <div>
        <div className="card video-card">
            <Link to={`/videos/${video._id}`} className='link-to' onClick={()=>addToHistory(token,playListDispatch,video)}>
                <div className="card-media">
                    <img className="vc-image" 
                    src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
                    alt="specs" loading="lazy" />  
                    <span className="time text-xs">{video.duration}</span>               
                </div>
            </Link>
            <div className="card-content">
                <Link to={`/videos/${video._id}`} className='link-to' >
                    <div className="content-title">
                        <p className='text-sm'>{video.title}</p>      
                    </div>
                </Link>
                <div className="desc details"> 
                    <span className="gray text-xs"><strong> {video.creator}</strong></span> 
                    <span className=" gray text-xs">{video.views}views</span>                                         
                </div>
                <div className='action-btn'>                  
                    <span className='gray icons' onClick={openModal}>
                        <MdPlaylistAdd size='1.3rem'/>
                    </span>                 
                    <span className='gray icons' onClick={watchLaterHandler}>
                      {!checkIfExists(playListState.watchlater,video._id)?
                       <MdOutlineWatchLater size='1.2rem'/>
                       : <MdOutlineWatchLater size='1.2rem' color='#EC255A'/>}
                    </span>                   
                </div>
            </div>
        </div>
    </div>
  )
}
