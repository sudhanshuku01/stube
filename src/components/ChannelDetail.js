import React, { useState } from 'react'
import { useEffect } from 'react';
import Channel from './Channel';
import { fetchFromAPI } from '../utils/FetchfromAPI';
import { useParams } from "react-router-dom";
import Video from './Video';
const ChannelDetail = () => {
  const [data,setData]=useState([]);
  const [video,setVideo]=useState([])
  const {id} = useParams();
  useEffect( ()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setData(data.items))

    fetchFromAPI(`search?part=snippet&channelId=${id}`)
    .then((data) => setVideo(data.items))
    // eslint-disable-next-line
  },[])
  return (
    <div>
       <div style={{height:'120px',   
      background: 'linear-gradient(90deg, rgba(66,156,200,1) 24%, rgba(21,92,161,1) 71%, rgba(77,92,156,1) 100%)'}}>
       </div>
       <div style={{marginTop:'-125px'}}>
        {data.length===1 && <Channel data={data}/>}
       </div>
       <div style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        gap:'15px'
       }}>
         {video.map((element,index)=>{
          return <Video key={index} video={element}/>
         })}
       </div>
    </div>
  )
}

export default ChannelDetail
