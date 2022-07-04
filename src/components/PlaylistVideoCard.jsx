import React from 'react';
import {MdDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAuth,usePlaylist } from '../contexts/MainProvider';
import { addToHistory } from '../services/history-services';

export function PlaylistVideoCard({video,deleteVideo,playlistId}) {
    const{token} = useAuth();
    const{playListDispatch} = usePlaylist();
    const deleteVideoHandler=(videoId)=>{
        deleteVideo(token,playListDispatch,videoId,playlistId)
    }
  return (
    <div className="horizontal-card">
        <Link to={`/videos/${video._id}`} onClick={()=>addToHistory(token,playListDispatch,video)}>
        <div className="card-media">
            <img className="hc-image res-image"
            src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`} 
            alt="video" />                
        </div>
        </Link>
        <div className="content">
            <Link to={`/videos/${video._id}`} className='link-to'
            onClick={()=>addToHistory(token,playListDispatch,video)}>
                <h3 className="card-title">{video.title}</h3>
            </Link>
            <p className="gray card-sub-title">{video.creator}</p>           
            <div className='content-footer'>
                <div className='info'>
                <span className='gray'>{video.views} views</span>
                <span className='gray'>{video.published} ago</span>
                </div>
                <span className='delete' onClick={()=>deleteVideoHandler(video._id)}>
                    <MdDelete size='1.5em'/>
                </span>
            </div>
        </div>                        
    </div>
  )
}
