import React,{useState} from 'react'
import { usePlaylist,useAuth } from '../contexts/MainProvider'
import { addVideoToPlaylist, createPlaylist, removeVideoFromPlaylist } from '../services/playlist-services'
import { checkIfExists } from '../Utils/check-if-exists';
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom';

export function PlaylistModal() {
    const {token,user} = useAuth()
    const[playlistTitle,setPlaylistTitle] = useState('')
    const{isModalOpen,setIsModalOpen,playListDispatch,playListState,selectedVideo} = usePlaylist()
    const{playlists} = playListState

    // handle playlist's video
    const handlePlaylistHandler =async (playlist)=>{
      if(checkIfExists(playlist?.videos,selectedVideo._id)){
        await removeVideoFromPlaylist(token,playListDispatch,selectedVideo._id,playlist._id)
      }else{
      await addVideoToPlaylist(token,playListDispatch,selectedVideo,playlist._id)
      }
    }
    // handle create playlist
    const handleSubmit = async(e)=>{
        e.preventDefault()  
        const createdPlaylistId=await createPlaylist(token,playListDispatch,playlistTitle)
        // add the vid to the newly created playlist
        addVideoToPlaylist(token,playListDispatch,selectedVideo,createdPlaylistId)
        setPlaylistTitle('')
    }
  return (
    isModalOpen && (
    <div className='playlist-modal'>
      <div className='dialogbox'>
        {user ? (
          <>
        <div className='dialog-header'>
          <h4 className='text-sm'>add to..</h4>
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
          playlists.length > 0 && 
          <div >
          {
            playlists?.map(playlist=>(
              <div key={playlist._id} className='playlists'>
                <label className='text-sm accent'>
                <input type ='checkbox' checked={!!checkIfExists(playlist.videos,selectedVideo._id)}
                  onChange={()=>handlePlaylistHandler(playlist)}/>
                 &nbsp; {playlist.title}          
                </label>
              </div>              
            ))
          }
          </div>
          
        }</>) :(
          <div className='d-flex'>
            <div className='dialog-header'>
              <h4 className='text-md bold'>You are not logged in. Please login</h4>
              <span className='close' onClick={()=>setIsModalOpen(false)}><MdClose/> </span>
            </div>
            <div >
              <Link to='/login'><button className='button primary-btn' onClick={()=>setIsModalOpen(false)}>Login</button></Link>
              <Link to='/signup'><button className='button secondary-btn'onClick={()=>setIsModalOpen(false)}>Signup</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
    )
  )
}
