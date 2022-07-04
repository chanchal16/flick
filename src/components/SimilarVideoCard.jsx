import React from 'react';
import {Link} from 'react-router-dom';
import {MdRemoveRedEye} from 'react-icons/md'

export function SimilarVideoCard({video}) {
  return (
    <div className="hc-card">
        <div className="card-media">
            <img className="hc-img res-image"
            src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`} 
            alt="top" />                
        </div>
        <div className="hc-content">
            <Link to={`/videos/${video._id}`} className='link-to hover'>
                <h3 className="hc-title">{video.title.substring(0,40)}...</h3>
            </Link>
            <p className="gray hc-sub-title ">{video.creator}</p>
            <div >
            <span className='gray hc-sub-title'>{video.views} <MdRemoveRedEye/>
                <span className="dot">&bull;</span>
            {video.published} ago</span>                  
            </div>
        </div>
    </div>
  )
}
