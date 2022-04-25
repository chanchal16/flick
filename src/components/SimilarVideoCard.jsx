import React from 'react';
import {Link} from 'react-router-dom';
import {MdRemoveRedEye} from 'react-icons/md'

export function SimilarVideoCard({video}) {
  return (
    <div class="hc-card">
        <div class="card-media">
            <img class="hc-img res-image"
            src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`} 
            alt="top" />                
        </div>
        <div class="hc-content">
            <Link to={`/${video._id}`} className='link-to hover'>
                <h3 class="card-title">{video.title.substring(0,40)}...</h3>
            </Link>
            <p class="gray card-sub-title ">{video.creator}</p>
            <div >
            <span className='gray card-sub-title'>{video.views} <MdRemoveRedEye/>
                <span className="dot">&bull;</span>
            {video.published} ago</span>                  
            </div>
        </div>
    </div>
  )
}
