import React from 'react';
import { Link } from 'react-router-dom';
import {MdPlaylistAdd,MdOutlineWatchLater} from 'react-icons/md'
import { usePlaylist,useAuth } from '../contexts/MainProvider';
import { addToWatchLater, removeFromWatchLater } from '../services/watchLater-services';
import { checkIfExists } from '../Utils/check-if-exists';
import { addToHistory } from '../services/history-services';

export function VideoCard({video}) {
    const {token} = useAuth();
    const {playListState,playListDispatch,setIsModalOpen,setSelectedVideo} = usePlaylist();   
    
    const watchLaterHandler = async()=>{
        if(checkIfExists(playListState.watchlater,video._id)){
            await removeFromWatchLater(token,playListDispatch,video._id)     
        }else{
            await addToWatchLater(token,playListDispatch,video)
        }
    }

    const openModal = ()=>{
        setIsModalOpen(true);
        setSelectedVideo(video)
    }
    
  return (
    <div>
        <div class="card">
            <Link to={`/${video._id}`} className='link-to' onClick={()=>addToHistory(token,playListDispatch,video)}>
                <div class="card-media">
                    <img class="vc-image" 
                    src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
                    alt="specs" loading="lazy" />  
                    <span class="time text-xs">{video.duration}</span>               
                </div>
            </Link>
            <div class="card-content">
                <Link to={`/${video._id}`} className='link-to' >
                    <div class="content-title">
                        <p className='text-sm'>{video.title}</p>      
                    </div>
                </Link>
                <div class="desc details"> 
                    <span class="gray text-xs"><strong> {video.creator}</strong></span> 
                    <span class=" gray text-xs">{video.views}views</span>                                         
                </div>
                <div className='action-btn'>                  
                    <span className='gray' onClick={openModal}>
                        <MdPlaylistAdd size='1.3rem'/>
                    </span>                 
                    <span className='gray' onClick={watchLaterHandler}>
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
