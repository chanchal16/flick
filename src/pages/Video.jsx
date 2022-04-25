import React,{useEffect,useState} from 'react'
import { SimilarVideoCard, VideoPlayer } from '../components'
import '../styles/video.css';
import {MdPlaylistAdd,MdOutlineWatchLater,MdThumbUpOffAlt,MdThumbUpAlt} from 'react-icons/md'
import {  useParams } from 'react-router-dom';
import { useVideo,useAuth,usePlaylist } from '../contexts/MainProvider';
import { checkIfExists } from '../Utils/check-if-exists';
import { addToLikes, removeFromLikes } from '../services/likes-services';

export function Video() {
  const{videoId} = useParams();
  const {videos} = useVideo();
  const {token} = useAuth()
  const[similarVideos,setSimilarVideos] = useState([])
  const {playListState,playListDispatch} = usePlaylist()

  // check the id of the video
  const video = checkIfExists(videos,videoId)
console.log('video',video)
  // filter out similar videos
  const getSimilarVideos = ()=>{
    let videoList = videos.filter(vid=>vid.categoryName === video.categoryName)
                    .filter(vid=>vid._id !== videoId)
    setSimilarVideos(videoList) 
  }

  useEffect(() => {
    getSimilarVideos()
  }, [video])

  // handle like video
  const LikesHandler = async()=>{
    if(checkIfExists(playListState.likes,video._id)){
      await removeFromLikes(token,playListDispatch,video._id)    
    }else{
      await addToLikes(token,playListDispatch,video)
    }
  }
  
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
                  <span onClick={LikesHandler}>
                  {!checkIfExists(playListState.likes,video._id)?
                    <MdThumbUpOffAlt size='1.5rem'/>
                    : <MdThumbUpAlt size='1.5rem' color='#292C6D'/>
                  }
                  </span>
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
