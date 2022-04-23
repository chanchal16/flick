import React from 'react'
import { PlaylistCard } from '../components/PlaylistCard'
import { usePlaylist } from '../contexts/PlaylistContext'

export function Playlists() {  
    const {playListState} = usePlaylist()
    const{playlists} = playListState

  return (
    <div className='playlists-container'>
        {
            playlists?.map(playlist=>(
                <PlaylistCard key={playlist._id} playlist={playlist} />
            ))
        }
    </div>
  )
}
