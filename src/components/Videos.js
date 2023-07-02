import React, { useState,useEffect } from 'react'
import Video from'./Video.js'
import { fetchFromAPI } from '../utils/FetchfromAPI.js'
const Videos = ({feed}) => {
  const [videos,setVideos]=useState([])
    useEffect( ()=>{
    fetchFromAPI(`search?part=snippet&q=${feed}`)
    .then((data) => setVideos(data.items))
  },[feed])
  console.log(videos)
  return (<>
  <div className='videoscontainer'>
   {videos.length!==0 && videos.map((element,index)=>{
     return <Video key={index} video={element} />
    })}
    </div>
  </>
  )
}

export default Videos
