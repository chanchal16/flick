import React from 'react';
import { Link } from 'react-router-dom';
import { PlaylistCard } from '../components/PlaylistCard'
import { usePlaylist } from '../contexts/PlaylistContext';
import playlist from '../assets/playlist.svg'

export function Playlists() {  
    const {playListState} = usePlaylist()
    const{playlists} = playListState

  return (
    <>
    { playlists?.length > 0 ? (
      <div className='playlists-container'>
          {
              playlists?.map(playlist=>(
                  <PlaylistCard key={playlist._id} playlist={playlist} />
              ))
          }
      </div>
    ):(
      <div className='empty'>
        <img src={playlist} alt='liked' />
        <span className='text-sm gray-text'>Looks like you have not created any playlist yet.</span>
        <Link to='/videos'>
            <button className='button'>Add playlist</button>
        </Link>
      </div>
    )
    }
    </>
  )
}
