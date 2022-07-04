import React,{useEffect,useState} from 'react'
import { SimilarVideoCard, VideoPlayer } from '../components'
import '../styles/video.css';
import {MdPlaylistAdd,MdOutlineWatchLater,MdThumbUpOffAlt,MdThumbUpAlt} from 'react-icons/md'
import {  useParams,useNavigate } from 'react-router-dom';
import { useVideo,useAuth,usePlaylist } from '../contexts/MainProvider';
import { checkIfExists } from '../Utils/check-if-exists';
import { addToLikes, removeFromLikes } from '../services/likes-services';
import{addToWatchLater,removeFromWatchLater} from '../services/watchLater-services'
import { toast } from "react-toastify"

export function Video() {
  const{videoId} = useParams();
  const navigate = useNavigate()
  const {videoState} = useVideo();
  const{videos} = videoState
  const {token,user} = useAuth()
  const[similarVideos,setSimilarVideos] = useState([])
  const {playListState,playListDispatch,setIsModalOpen,setSelectedVideo} = usePlaylist()

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

  // handle like video
  const LikesHandler = async()=>{
    if(user?._id){
      if(checkIfExists(playListState.likes,video._id)){
        await removeFromLikes(token,playListDispatch,video._id)    
      }else{
        await addToLikes(token,playListDispatch,video)
      }
    }else{
      toast.error('Please log in')
      navigate('/login')
    }
  }
  // handle watchlater
  const watchLaterHandler = async()=>{
    if(user?._id){
      if(checkIfExists(playListState.watchlater,video._id)){
          await removeFromWatchLater(token,playListDispatch,video._id)     
      }else{
          await addToWatchLater(token,playListDispatch,video)
      }
    }else{
      toast.error('Please log in')
    }
  }
  // open playlist model
  const openModal = ()=>{
    setIsModalOpen(true);
    setSelectedVideo(video)
  }
  
  return (
    <div className='container'>
        <div className='video-container'>
            <VideoPlayer video={video}/>
            {/* video details */}
            <div className='video-details'>
              <p className='text-lg'>{video?.title}</p>
              <div className='sub-details'>
                <div className='sub-info'>
                  <span>{video?.views} views</span>
                  <span className='text-sm'>{video?.published} ago</span>
                </div>
                <div className='sub-info'>
                  <span className='icons' onClick={LikesHandler}>
                  {!checkIfExists(playListState?.likes,video?._id)?
                    <MdThumbUpOffAlt size='1.5rem'/>
                    : <MdThumbUpAlt size='1.5rem' color='#292C6D'/>
                  }
                  </span>
                  <span className='gray icons' onClick={openModal}>
                    <MdPlaylistAdd size='1.6rem'/>
                  </span>                   
                  <span className='gray icons' onClick={watchLaterHandler}>
                    {!checkIfExists(playListState?.watchlater,video?._id)?
                      <MdOutlineWatchLater size='1.5rem'/>
                      : <MdOutlineWatchLater size='1.5rem' color='#EC255A'/>}
                  </span> 
                </div>
              </div>
              <p className='text-sm'>{video?.description}</p>
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
