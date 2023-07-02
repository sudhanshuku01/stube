import React from 'react'
import { useNavigate } from 'react-router-dom';
const Channel = ({channel,data}) => {
  const Navigate=useNavigate();
    const snippet=channel?channel.snippet:data[0].snippet;
    const Title=snippet.title
    const Image=snippet.thumbnails.medium.url
  return (
    <>
    <img style={
        {
            display:'block',
            margin:'auto',
            marginTop:'40px',
            borderRadius:'50%',
            width:'160px'
        }
    } src={Image} alt="" />
    <div onClick={()=>Navigate(`/channel/${snippet.channelId}`,{replace:true})} style={{textAlign:'center'}} id='channeltitle'><span  style={{cursor:'pointer'}}>{Title}</span><span style={{
        fontSize:"14px",
        margin:" 0px 4px"
      }}><i className="fa-solid fa-circle-check"></i></span></div>
    </>
  )
}

export default Channel
