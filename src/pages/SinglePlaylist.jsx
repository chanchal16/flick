import React from 'react';
import {useParams,Link} from 'react-router-dom'
import { PlaylistVideoCard } from '../components';
import { usePlaylist } from '../contexts/MainProvider';
import { removeVideoFromPlaylist } from '../services/playlist-services';
import { checkIfExists } from '../Utils/check-if-exists';
import nodata from '../assets/nodata.svg'

export function SinglePlaylist() {
    let {playlistId} = useParams();
    const{playListState} = usePlaylist()
    const{playlists} = playListState
    // check the id of the playlist is same
    const playlistData = checkIfExists(playlists,playlistId);
    const {title,videos} = playlistData
    
  return (
    <div className='outer-container'>
        {  videos?.length > 0 ? (
        <>
        <div className='watchlist-header'>
            <h6 className='h6 gray2-text'>{title}
            <span className='gray-text'> ({videos.length})</span></h6>
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
        </>):(
            <div className='empty'>
                <img src={nodata} alt='history' />
                <span className='text-sm gray-text'>Looks like you haven't added any videos yet to the playlist.</span>
                <Link to='/videos'>
                    <button className='button'>Add videos</button>
                </Link>
            </div>
        )
        }
    </div>
  )
}
