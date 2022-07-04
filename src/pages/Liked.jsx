import React from 'react';
import { Link } from 'react-router-dom';
import { usePlaylist } from '../contexts/PlaylistContext'
import { removeFromLikes } from '../services/likes-services';
import { PlaylistVideoCard } from '../components';
import liked from '../assets/liked.svg'

export function Liked() {
    const {playListState} = usePlaylist()
    const {likes} = playListState
  return (
    <div className='outer-container'>
        {likes?.length > 0 ?( 
        <>
        <div className='watchlist-header'>
            <h6 className='h6 gray2-text'>Liked videos
            <span className='gray2-text'> ({likes.length})</span></h6>
        </div>
        {/* video card */}
        <div className='list-container'>
        {
            likes?.map(video=>(
                <PlaylistVideoCard key={video._id} video={video} deleteVideo={removeFromLikes} />
            ))
        }
        </div> 
        </>):(
            <div className='empty'>
                <img src={liked} alt='liked' />
                <span className='text-sm gray-text'>You have not liked any videos yet.</span>
                <Link to='/videos'>
                    <button className='button'>Watch videos</button>
                </Link>
            </div>
        )
        }       
    </div>
  )
}
