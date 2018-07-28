import React from 'react'

const VideoItem = ({video}) => {
  if(!video){
    return <div>loading ... </div>
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}` 
  return(
    <div>

      <iframe src={url} />

    </div>

  )
} 

export default VideoItem;