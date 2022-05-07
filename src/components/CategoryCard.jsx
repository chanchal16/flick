import React from 'react';
import {useVideo} from '../contexts/MainProvider'

export function CategoryCard({category}) {
  const {videoDispatch} = useVideo()
   
  return (
    <div className="card category-card" key={category._id} value={category.categoryName}
    onClick = {(e)=>videoDispatch({type:'FILTER_BY_CATEGORY',payload:category.categoryName})}>
        <div className="card-media">
            <img className="vc-image"
            src={category.img}
            alt="cover" />
        </div>
        <div className='card-content'>
            <div className='content-title'>
            <p className='text-lg'>{category.categoryName}</p>
            </div>
            <div className='desc'>
            <span className='text-sm'>{category.description.substring(0,80)}..</span>
            </div>
        </div>                   
    </div> 
  )
}
