import React from 'react';
import {MdPlaylistAdd,MdOutlineWatchLater} from 'react-icons/md'

export function VideoCard({video}) {
  return (
    <div>
        <div class="card">
            <div class="card-media">
                <img class="vc-image" 
                src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
                alt="specs" loading="lazy" />  
                <span class="time text-xs">{video.duration}</span>               
            </div>
            <div class="card-content">
                <div class="content-title">
                    <p className='text-sm'>{video.title}</p>      
                </div>
                <div class="desc details"> 
                    <span class="gray text-xs"><strong> {video.creator}</strong></span> 
                    <span class=" gray text-xs">{video.views}views</span>                                         
                </div>
                <div className='action-btn'>
                    <span className='gray'><MdPlaylistAdd size='1.3rem'/></span>
                    <span className='gray'><MdOutlineWatchLater size='1.2rem'/></span>
                </div>
            </div>
        </div>
    </div>
  )
}
