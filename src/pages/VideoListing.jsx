import React,{useEffect} from 'react';
import axios from 'axios';
import '../styles/videos.css';
import { useVideo } from '../contexts/VideoContext';
import { VideoCard } from '../components';

export function VideoListing() {
    const{videoState,videoDispatch} = useVideo();

    useEffect(() => {      
      (async () => {
        try {
           await axios.get("/api/videos")
           .then((res) => {
                videoDispatch({type:'LOAD_VIDEOS',payload:res.data.videos});
            })
        }catch(err) { console.log(err)};       
      })();      
    }, [])
    
  return (
    <div className='videos-container'>
        {
          videoState.videos?.map(video=>(            
              <VideoCard video={video} key={video._id} />
          ))
        }
    </div>
  )
}
