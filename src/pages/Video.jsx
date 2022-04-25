import React,{useEffect,useState} from 'react'
import { SimilarVideoCard, VideoPlayer } from '../components'
import '../styles/video.css';
import {MdPlaylistAdd,MdOutlineWatchLater,MdThumbUpOffAlt,MdThumbUpAlt} from 'react-icons/md'
import {  useParams } from 'react-router-dom';
import { useVideo } from '../contexts/VideoContext';
import { checkIfExists } from '../Utils/check-if-exists';

export function Video() {
  const{videoId} = useParams();
  const {videos} = useVideo();
  const[similarVideos,setSimilarVideos] = useState([])

  // check the id of the video
  const video = checkIfExists(videos,videoId)

  // filter out similar videos
  const getSimilarVideos = ()=>{
    let videoList = videos.filter(vid=>vid.categoryName === video.categoryName)
                    .filter(vid=>vid._id !== videoId)
    setSimilarVideos(videoList) 
  }

  useEffect(() => {
    getSimilarVideos()
  }, [video])
  
  return (
    <div className='container'>
        <div className='video-container'>
            <VideoPlayer video={video}/>
            {/* video details */}
            <div className='video-details'>
              <p className='text-lg'>{video.title}</p>
              <div className='sub-details'>
                <div className='sub-info'>
                  <span>{video.views} views</span>
                  <span className='text-sm'>{video.published} ago</span>
                </div>
                <div className='sub-info'>
                  <MdThumbUpOffAlt size='1.5rem'/>
                  <MdPlaylistAdd size='1.6rem'/>
                  <MdOutlineWatchLater size='1.5rem'/>
                </div>
              </div>
              <p className='text-sm'>{video.description}</p>
            </div>
        </div>
        <div className='similar-videos'>
          <h6 className='text-lg '>Similar videos</h6>
          {
              similarVideos.map(video=>(
                <SimilarVideoCard key={video._id} video={video} />
              ))
          }
        </div>
    </div>
  )
}
