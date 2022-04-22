import React,{useState} from 'react'
import { usePlaylist,useAuth } from '../contexts/MainProvider'
import { addVideoToPlaylist, createPlaylist, removeVideoFromPlaylist } from '../services/playlist-services'
import { checkIfExists } from '../Utils/check-if-exists';
import {MdClose} from 'react-icons/md'

export function PlaylistModal() {
    const {token} = useAuth()
    const[playlistTitle,setPlaylistTitle] = useState('')
    const{isModalOpen,setIsModalOpen,playListDispatch,playListState,selectedVideo} = usePlaylist()
    const{playlists} = playListState

    const handlePlaylistHandler =async (playlist)=>{
      if(checkIfExists(playlist?.videos,selectedVideo._id)){
        await removeVideoFromPlaylist(token,playListDispatch,selectedVideo._id,playlist._id)
      }else{
      await addVideoToPlaylist(token,playListDispatch,selectedVideo,playlist._id)
      }
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()  
        await createPlaylist(token,playListDispatch,playlistTitle)
        setPlaylistTitle('')
    }
  return (
    isModalOpen && (
    <div className='playlist-modal'>
      <div className='dialogbox'>
        <div className='dialog-header'>
          <h4>add to..</h4>
          <span className='close' onClick={()=>setIsModalOpen(false)}><MdClose/> </span>
        </div>
        
        <form className='playlist' onSubmit={handleSubmit} >
          <input type='text' placeholder='enter name' className='input-field'
           value={playlistTitle} onChange={(e)=>setPlaylistTitle(e.target.value)}/>
           <div className='dialog-action'>
          <button className='action-btns add' >Create</button>
          <button className='action-btns cancel' onClick={()=>setIsModalOpen(false)}>Cancel</button>
          </div>
        </form>
        {
          playlists.length > 0 && <div className='playlists'>
          {
            playlists?.map(playlist=>(
              <div key={playlist._id}>
                <label className='text-sm accent'>
                <input type ='checkbox' checked={!!checkIfExists(playlist.videos,selectedVideo._id)}
                  onChange={()=>handlePlaylistHandler(playlist)}/>
                 {playlist.title}          
                </label>
              </div>              
            ))
          }
          </div>
        }
      </div>
    </div>
    )
  )
}
