import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { fetchFromAPI } from '../utils/FetchfromAPI'
import Video from './Video'
import { useParams } from 'react-router-dom'
const VideoDetails = () => {
  const [videodetails,setVideodetails]=useState(null)
  const [relatedvideo,setRelatedvideo]=useState(null);
  const {id}=useParams();
  useEffect( ()=>{
    fetchFromAPI(`videos?part=snippet,statics&id=${id}`)
    .then((data) => setVideodetails(data.items))

    fetchFromAPI(`search?part=snippet,statics&relatedToVideoId=${id}`)
    .then((data) => setRelatedvideo(data.items))
    // eslint-disable-next-line
  },[])
  console.log(videodetails)
  return (
    <div className='videodetails'>
      <div className='playingvideo' style={{color:'white'}}>
      <div className='player-wrapper'>
        <ReactPlayer controls
          className='react-player'
          url={`https://www.youtube.com/watch?v=${id}`}
          width="100%"
          height="100%"
        />
      </div>
      <div style={{fontWeight:'bold',padding:'5px 5px'}}>{videodetails?(videodetails[0].snippet.title).slice(0,60):''}</div>
      <div style={{padding:'5px 5px',display:'flex',justifyContent:'space-between'}}>
      <div><span style={{fontSize:'15px',fontFamily:'math',cursor:'pointer'}}>{videodetails?videodetails[0].snippet.channelTitle:''}</span><i style={{fontSize:'14px',margin:'0px 2px'}} className="fa-solid fa-circle-check"></i></div>
      <div><span>{videodetails?videodetails[0].statistics.viewCount:''} views &nbsp; {videodetails?videodetails[0].statistics.likeCount:''} likes</span>
      </div>
      </div>
      </div>
      <div className='relatedvideocont'>
       {relatedvideo && relatedvideo.map((element,index)=>{
        return <Video key={index} video={element}/>
       })}
      </div>
   </div>
  )
}

export default VideoDetails
