import React from 'react';
import { Link } from 'react-router-dom';
import { usePlaylist,useAuth } from '../contexts/MainProvider'
import { clearHistory, removeFromHistory } from '../services/history-services';
import { PlaylistVideoCard } from '../components';
import notfound from '../assets/notfound.svg';

export function History() {
    const{token} = useAuth()
    const {playListState,playListDispatch} = usePlaylist()
    const{history} = playListState
  return (
    <div className='outer-container'>
        {history?.length > 0 ? (
        <>
        <div className='watchlist-header'>
            <h6 className='h6 gray2-text'>History</h6>
            <span className='gray2-text'>{history.length} videos</span>
        </div>
        <div className='subhead-div'>
            <button className='button primary-btn' onClick={()=>clearHistory(token,playListDispatch)}>
                CLEAR
            </button>
        </div>
        {/* video card */}
        <div className='list-container'>           
            {
                history.map(video=>(
                    <PlaylistVideoCard key={video._id} video={video} deleteVideo={removeFromHistory} />
                ))
            }
        </div>
        </>):(
            <div className='empty'>
                <img src={notfound} alt='history' />
                <span className='text-sm gray-text'>Looks like you haven't watched any videos yet.</span>
                <Link to='/videos'>
                    <button className='button'>Watch videos</button>
                </Link>
            </div>
        )
        }
    </div>
  )
}
