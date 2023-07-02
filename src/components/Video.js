import React from 'react'
import { useNavigate } from 'react-router-dom'
import Channel from './Channel';
const Video = ({video}) => {
  const Navigate=useNavigate();
 const {id:{kind,videoId},snippet}=video
 
  return (
    <div id='video'>
      {kind==="youtube#channel" && <Channel channel={video} /> }
      {kind==="youtube#video" && <img onClick={()=>{
        Navigate(`/video/${videoId}`,{replace:true})
      }} id='thumbnail' src={snippet.thumbnails.medium.url} alt="" />}
      {kind==="youtube#video" && <div id='videotitle'>{snippet.title.slice(0,60)}</div>}      
     {kind==="youtube#video" && <div id='channeltitle'><span onClick={()=>{
        Navigate(`/channel/${snippet.channelId}`,{replace:true})
      }} style={{cursor:'pointer'}}>{snippet.channelTitle}</span><span style={{
        fontSize:"14px",
        margin:" 0px 4px"
      }}><i className="fa-solid fa-circle-check"></i></span></div>}
    </div>
  )
}

export default Video
