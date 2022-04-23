import React from 'react';
import {useParams} from 'react-router-dom'
import { PlaylistVideoCard } from '../components';
import { usePlaylist } from '../contexts/MainProvider';
import { removeVideoFromPlaylist } from '../services/playlist-services';
import { checkIfExists } from '../Utils/check-if-exists';

export function SinglePlaylist() {
    let {playlistId} = useParams();
    const{playListState} = usePlaylist()
    const{playlists} = playListState
    // check the id of the playlist is same
    const playlistData = checkIfExists(playlists,playlistId);
    const {title,videos} = playlistData
    
  return (
    <div className='outer-container'>
        <div className='watchlist-header'>
            <h6 className='h6 gray2-text'>{title}</h6>
            <span className='gray2-text'>{videos.length} videos</span>
        </div>
        <div className='subhead-div'>
            <button className='button primary-btn'>
                Delete all
            </button>
        </div>
        {/* video card */}
        <div className='list-container'>           
            {
                videos?.map(video=>(
                    <PlaylistVideoCard key={video._id} video={video} 
                    playlistId={playlistId} deleteVideo={removeVideoFromPlaylist} />
                ))
            }
        </div>
    </div>
  )
}
