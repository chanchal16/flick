import React from 'react';
import {MdPlaylistAdd,MdOutlineWatchLater} from 'react-icons/md'
import { usePlaylist,useAuth } from '../contexts/MainProvider';
import { addToWatchLater, removeFromWatchLater } from '../services/watchLater-services';
import { checkIfExists } from '../Utils/check-if-exists';

export function VideoCard({video}) {
    const {token} = useAuth();
    const {playListState,playListDispatch} = usePlaylist();   
    
    const addwatchLaterHandler = async()=>{
        if(checkIfExists(playListState.watchlater,video._id)){
            await removeFromWatchLater(token,playListDispatch,video._id)     
        }else{
            await addToWatchLater(token,playListDispatch,video)
        }
    }
    
  return (
    <div>
        <div class="card">
            <div class="card-media">
                <img class="vc-image" 
                src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
                alt="specs" loading="lazy" />  
                <span class="time text-xs">{video.duration}</span>               
            </div>
            <div class="card-content">
                <div class="content-title">
                    <p className='text-sm'>{video.title}</p>      
                </div>
                <div class="desc details"> 
                    <span class="gray text-xs"><strong> {video.creator}</strong></span> 
                    <span class=" gray text-xs">{video.views}views</span>                                         
                </div>
                <div className='action-btn'>
                    <span className='gray'><MdPlaylistAdd size='1.3rem'/></span>                 
                    <span className='gray' onClick={addwatchLaterHandler}>
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
