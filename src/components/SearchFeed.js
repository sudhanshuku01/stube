import React, { useState } from 'react'
import Videos from './Videos.js'
import {categories,icons} from './index.js';
const SearchFeed = () => {
  const [feed,setFeed]=useState('New');
  return (
    <div className='feed'>
    <div className='searchfeed'>
      <div className='sidebar'> 
       { categories.map((category,index)=>{
        return <div key={index} onClick={()=>setFeed(category)} style={{backgroundColor:category===feed?'red':''}}><img id='catimage' src={icons[index]} alt="" /><span>{category}</span></div>
       })}
      </div>
      <div id='copyrighttext' style={{color:'white'}}>Copyright <span>&#169;</span> YouTube</div>
    </div>

    <div style={{backgroundColor:'black'}}>
       <div id='topfeedname'>{feed}<span style={{color:'red',margin:'0px 9px'}}>Videos</span></div>
       <Videos feed={feed}/>
    </div>
    </div>
  )
}
export default SearchFeed
