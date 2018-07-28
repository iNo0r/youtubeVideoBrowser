import React from 'react'

import VideoListItem from './video_list_item'

const VideoList = ({ videos, clickHandler}) => {
const lister = videos.map((video,key) =>{
  return <VideoListItem 
          handleClick={clickHandler}
          key={key} 
          video={video} />
})
return(

  <div> 
  
  {lister}



  </div>
)
}

export default VideoList;