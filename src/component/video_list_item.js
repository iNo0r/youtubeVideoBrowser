import React from 'react'

const VideoListItem = ({ video, handleClick}) => {
 
  return(

  <div onClick={() => handleClick(video)}>

    <div>
    

        <img src={video.snippet.thumbnails.default.url} />
    {video.snippet.title}
    </div>

  </div>
  )
}

export default VideoListItem