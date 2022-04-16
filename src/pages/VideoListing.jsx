import React,{useEffect} from 'react';
import axios from 'axios';
import '../styles/videos.css';

import { useVideo } from '../contexts/VideoContext';
import { VideoCard } from '../components';

export function VideoListing() {
    const{videos,setVideos} = useVideo();

    useEffect(() => {      
      (async () => {
        try {
           await axios.get("/api/videos")
           .then((res) => {
                setVideos(res.data.videos);
                console.log('videos',res.data.videos)
            })
        }catch(err) { console.log(err)};       
      })();      
    }, [])
    
  return (
    <div className='videos-container'>
        {
            videos?.map(video=>(
                <VideoCard video={video} key={video._id} />
            ))
        }
    </div>
  )
}
