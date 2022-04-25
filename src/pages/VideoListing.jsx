import React,{useEffect} from 'react';
import axios from 'axios';
import '../styles/videos.css';
import { useVideo } from '../contexts/VideoContext';
import { VideoCard } from '../components';
import { Link } from 'react-router-dom';

export function VideoListing() {
    const{videos,setVideos} = useVideo();

    useEffect(() => {      
      (async () => {
        try {
           await axios.get("/api/videos")
           .then((res) => {
                setVideos(res.data.videos);
            })
        }catch(err) { console.log(err)};       
      })();      
    }, [])
    
  return (
    <div className='videos-container'>
        {
            videos?.map(video=>(
              <Link to={`/${video._id}`} key={video._id} className='link-to' >
                <VideoCard video={video} key={video._id} />
              </Link>
            ))
        }
    </div>
  )
}
