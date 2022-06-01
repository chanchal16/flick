import React from 'react'

export function VideoPlayer({video}) {
  return (

        <iframe width="700"
         height="361" 
         src={`https://www.youtube.com/embed/${video._id}?autoplay=1`} 
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowFullScreen>
         </iframe>

  )
}
