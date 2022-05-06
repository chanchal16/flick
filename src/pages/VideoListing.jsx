import React,{useEffect} from 'react';
import axios from 'axios';
import '../styles/videos.css';
import { useVideo } from '../contexts/VideoContext';
import { VideoCard } from '../components';
import { filterByCategory,searchVideos } from '../Utils';

export function VideoListing() {
    const{videoState,videoDispatch} = useVideo();
    const {videos,category,searchQuery} = videoState

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

    // get filtered videos
    const searchedVideos = searchVideos(videos,searchQuery)
    const filteredVids = filterByCategory(searchedVideos,category)   
  return (
    <div>
      {/* filters */}
      <div className='filters-container'>
        <span className={`chip ${category.includes('ALL')? 'active-filter':''}`} 
        onClick={()=>videoDispatch({type:'FILTER_BY_CATEGORY',payload:'ALL'})}>
          All
        </span>
        <span className={`chip ${category.includes('Portrait Photography')? 'active-filter':''}`} 
        onClick={()=>videoDispatch({type:'FILTER_BY_CATEGORY',payload:'Portrait Photography'})}>
          Portrait Photography
        </span>
        <span className={`chip ${category.includes('Fashion Photography')? 'active-filter':''}`}
         onClick={()=>videoDispatch({type:'FILTER_BY_CATEGORY',payload:'Fashion Photography'})}>
          Fashion Photography
        </span>
        <span className={`chip ${category.includes('Architectural Photography')? 'active-filter':''}`}
        onClick={()=>videoDispatch({type:'FILTER_BY_CATEGORY',payload:'Architectural Photography'})}>
          Architectural Photography
        </span>
      </div>
      {/* videos */}
      <div className='videos-container'>
          {
            filteredVids?.map(video=>(            
                <VideoCard video={video} key={video._id} />
            ))
          }
      </div>
    </div>
  )
}
