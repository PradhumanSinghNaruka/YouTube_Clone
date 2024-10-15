import React from 'react'
import Navbar from './component/Navbar';
import Video from './component/Video';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';

// import Home from './component/Home';
// import Search from './component/Search';
// import PlayVideo from './component/PlayVideo';
// import { Route, Routes } from 'react-router-dom';
// import {AppContext} from "./context/contextApi";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/video/:id' element={<Video/>}/>
      </Routes>
    </div>
    // <AppContext>
    //   <div className='text-3xl'>Pradhuman</div>
    // </AppContext>
  );
}

export default App
