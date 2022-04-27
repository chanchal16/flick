import React from 'react';
import '../../styles/sidenav.css';
import {MdOutlineHome,MdOutlineThumbUp,MdPlaylistAdd,MdOutlineExplore,MdOutlineWatchLater,MdHistory} 
from 'react-icons/md';
import { Link, NavLink } from "react-router-dom";

export function SideNav() {
    const getClassName = ({isActive})=>{
        return isActive ? "nav-link active" : "nav-link"        
    }
  return (
    <div className='sidenav'>
        <NavLink to={'/'} className={getClassName}>
            <MdOutlineHome size='1.5em'/>
            <span className='text-xs'>Home</span>
        </NavLink>
        <NavLink to={'/videos'} className={getClassName}>
            <MdOutlineExplore size='1.5em'/>
            <span className='text-xs'>explore</span>
        </NavLink>
        <NavLink to={'/liked'} className={getClassName}>
            <MdOutlineThumbUp size='1.5em'/>
            <span className='text-xs'>Liked</span>
        </NavLink>
        <NavLink to={'/playlists'} className={getClassName}>
            <MdPlaylistAdd size='1.5em'/>
            <span className='text-xs'>Playlist</span>
        </NavLink>
        <NavLink to={'/watchlater'} className={getClassName}>
            <MdOutlineWatchLater size='1.5em'/>
            <span className='text-xs'>Watch later</span>
        </NavLink>
        <NavLink to={'/history'} className={getClassName}>
            <MdHistory size='1.5em'/>
            <span className='text-xs'>History</span>
        </NavLink>
    </div>
  )
}
