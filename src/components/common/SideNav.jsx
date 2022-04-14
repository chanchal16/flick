import React from 'react';
import '../../styles/sidenav.css';
import {MdOutlineHome,MdOutlineThumbUp,MdPlaylistAdd,MdOutlineExplore,MdOutlineWatchLater,MdHistory} 
from 'react-icons/md'

export function SideNav() {
  return (
    <div className='sidenav'>
        <div className='nav-link'>
            <MdOutlineHome size='1.5em'/>
            <span className='text-xs'>Home</span>
        </div>
        <div className='nav-link'>
            <MdOutlineExplore size='1.5em'/>
            <span className='text-xs'>explore</span>
        </div>
        <div className='nav-link'>
            <MdOutlineThumbUp size='1.5em'/>
            <span className='text-xs'>Liked</span>
        </div>
        <div className='nav-link'>
            <MdPlaylistAdd size='1.5em'/>
            <span className='text-xs'>Playlist</span>
        </div>
        <div className='nav-link'>
            <MdOutlineWatchLater size='1.5em'/>
            <span className='text-xs'>Watch later</span>
        </div>
        <div className='nav-link'>
            <MdHistory size='1.5em'/>
            <span className='text-xs'>History</span>
        </div>
    </div>
  )
}
