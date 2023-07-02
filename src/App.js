import './App.css'
import './css/SearchFeed.css'
import './css/Videos.css'
import './css/Videodetails.css'
import VideoDetails from './components/VideoDetails'
import ChannelDetail from './components/ChannelDetail'
import SearchTerm from './components/SearchTerm'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
// import Feed from './components/Feed'
import SearchFeed from './components/SearchFeed'
const App = () => {
  const [search,setSearch]=useState(null)
  const [progress,setProgress]=useState(0)
  console.log(search)
  return (
   <Router>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Navbar setSearch={setSearch} />
    <Routes>

      <Route exact path='/'   element={<SearchFeed setProgress={setProgress}/>}/>
      <Route exact path='/video/:id' element={<VideoDetails setProgress={setProgress}/>} />
      <Route exact path='/channel/:id' element={<ChannelDetail setProgress={setProgress}/>} />
      <Route exact path='/search/:searchTerm' element={<SearchTerm search={search}  />} />
    </Routes>
   </Router>
  )
}

export default App
