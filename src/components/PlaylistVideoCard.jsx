import React from 'react';
import {MdDelete} from 'react-icons/md';
import { useAuth,usePlaylist } from '../contexts/MainProvider';

export function PlaylistVideoCard({video,deleteVideo,playlistId}) {
    const{token} = useAuth();
    const{playListDispatch} = usePlaylist();
    const deleteVideoHandler=(videoId)=>{
        deleteVideo(token,playListDispatch,videoId,playlistId)
    }
  return (
    <div class="horizontal-card">
        <div class="card-media">
            <img class="hc-image res-image"
            src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`} 
            alt="video" />                
        </div>
        <div class="content">
            <h3 class="card-title">{video.title}</h3>
            <p class="gray card-sub-title">{video.creator}</p>
            <div className='content-footer'>
                <div className='info'>
                <span className='gray'>{video.views} views</span>
                <span className='gray'>{video.published} years ago</span>
                </div>
                <span className='delete' onClick={()=>deleteVideoHandler(video._id)}>
                    <MdDelete size='1.5em'/>
                </span>
            </div>
        </div>                        
    </div>
  )
}
