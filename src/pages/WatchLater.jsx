import React from 'react'
import { usePlaylist} from '../contexts/MainProvider';
import {removeFromWatchLater} from '../services/watchLater-services'
import { PlaylistVideoCard } from '../components';

function WatchLater() {
    const {playListState,playListDispatch} = usePlaylist();
    const{watchlater} = playListState
  return (
    <div className='outer-container'>
        <div className='watchlist-header'>
            <h6 className='h6 gray2-text'>Watch Later</h6>
            <span className='gray2-text'>{watchlater.length} videos</span>
        </div>
        <div className='subhead-div'>
            <button className='button primary-btn' onClick={()=>playListDispatch({type:'CLEAR_WATCHLATER'})}>
                Delete all
            </button>
        </div>
        {/* video card */}
        <div className='list-container'>           
            {
                watchlater.map(video=>(
                    <PlaylistVideoCard key={video._id} video={video} deleteVideo={removeFromWatchLater} />
                ))
            }
        </div>
    </div>
  )
}
export {WatchLater}