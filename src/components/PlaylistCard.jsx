import React from 'react';
import { Link } from 'react-router-dom';
import {MdDelete,MdPlaylistPlay} from 'react-icons/md';
import { usePlaylist,useAuth } from '../contexts/MainProvider';
import { deletePlaylist } from '../services/playlist-services';

export function PlaylistCard({playlist}) {
    const{token} = useAuth();
    const {playListDispatch} = usePlaylist()
    const {_id,title,videos} = playlist;
    const imgId = videos[0]?._id
  return (
    <div className='card'>
        <Link to={`/playlists/${_id}`} >
            <div className='card-media'>
                <img
                    src={`https://i.ytimg.com/vi/${imgId}/hq720.jpg`}
                    alt=""
                    className="vc-image"
                    loading="lazy"
                />
                <span className='card-badge '>
                    <MdPlaylistPlay size='1.5em'/>
                    {videos.length}
                </span>
            </div>
        </Link>
        <div className="card-content">
            <div className="content-title">
                <h4 className='text-md'>{title}</h4>
                <span className='delete' onClick={()=>deletePlaylist(token,playListDispatch,_id)}>
                    <MdDelete size='1.5em'/>
                </span>
            </div>
        </div>
    </div>
  )
}
