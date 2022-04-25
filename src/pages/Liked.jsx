import React from 'react'
import { usePlaylist } from '../contexts/PlaylistContext'
import { removeFromLikes } from '../services/likes-services';
import { PlaylistVideoCard } from '../components';

export function Liked() {
    const {playListState} = usePlaylist()
    const {likes} = playListState
  return (
    <div className='outer-container'>
        <div className='watchlist-header'>
            <h6 className='h6 gray2-text'>Liked videos</h6>
            <span className='gray2-text'>{likes.length} videos</span>
        </div>
        {/* video card */}
        <div className='list-container'>
        {
            likes?.map(video=>(
                <PlaylistVideoCard key={video._id} video={video} deleteVideo={removeFromLikes} />
            ))
        }
        </div>        
    </div>
  )
}
