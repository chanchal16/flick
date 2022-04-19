import React from 'react'
import { usePlaylist,useAuth } from '../contexts/MainProvider';
import {MdDelete} from 'react-icons/md';
import {removeFromWatchLater} from '../services/watchLater-services'

function WatchLater() {
    const {token} = useAuth()
    const {playListState,playListDispatch} = usePlaylist();
    const{watchlater} = playListState
  return (
    <div className='outer-container'>
        <div className='watchlist-header'>
            <h6 className='h6 gray2-text'>Watch Later</h6>
            <span className='gray2-text'>{watchlater.length} videos</span>
        </div>
        {/* video card */}
        <div className='list-container'>
            {
                watchlater.map(video=>(
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
                                <span className='delete' onClick={()=>removeFromWatchLater(token,playListDispatch,video._id)}>
                                    <MdDelete size='1.5em'/>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>

    </div>
  )
}
export {WatchLater}