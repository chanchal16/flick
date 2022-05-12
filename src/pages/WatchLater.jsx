import React from 'react'
import { Link } from 'react-router-dom';
import { usePlaylist} from '../contexts/MainProvider';
import {removeFromWatchLater} from '../services/watchLater-services'
import { PlaylistVideoCard } from '../components';
import empty from '../assets/empty.svg'

function WatchLater() {
    const {playListState,playListDispatch} = usePlaylist();
    const{watchlater} = playListState
  return (
    <div className='outer-container'>
        { watchlater?.length > 0 ? (
            <>
        <div className='watchlist-header'>
            <h6 className='h6 gray2-text'>Watch Later</h6>
            <span className='gray2-text'>{watchlater.length} videos</span>
        </div>
        {/* video card */}
        <div className='list-container'>           
            {
                watchlater.map(video=>(
                    <PlaylistVideoCard key={video._id} video={video} deleteVideo={removeFromWatchLater} />
                ))
            }
        </div>
        </>):(
            <div className='empty'>
                <img src={empty} alt='liked' />
                <span className='text-sm gray-text'>You have not saved any videos yet.</span>
                <Link to='/videos'>
                    <button className='button'>Watch videos</button>
                </Link>
            </div>
        )
        }
    </div>
  )
}
export {WatchLater}