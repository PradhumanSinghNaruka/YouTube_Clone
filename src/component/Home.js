import React from 'react'
import Slidebar from './Slidebar'
import List from './List';
import { useNavigate } from 'react-router-dom';

function Home() {
    const videos = [
        "https://www.youtube.com/embed/rmxzIWBXc5s",
        "https://www.youtube.com/embed/iFtH6g5HEVM",
        "https://www.youtube.com/embed/HvWlcpf48x4",
        "https://www.youtube.com/embed/5mP4pbOuWAs",
        "https://www.youtube.com/embed/QwbK1GUWN30",
        "https://www.youtube.com/embed/HTWRB7WUTLw",
        "https://www.youtube.com/embed/mGiPlKhWLWM",
        "https://www.youtube.com/embed/ElkgC2H1ujU",
        "https://www.youtube.com/embed/WGHNsYB42GQ",
        "https://www.youtube.com/embed/RhDF0HxKQeo",
        "https://www.youtube.com/embed/nuK-GyfV8QU",
        "https://www.youtube.com/embed/-nYquuHXNoo",
        "https://www.youtube.com/embed/ubj4qsvxRo0",
        "https://www.youtube.com/embed/Ce389cNaTdo",
        "https://www.youtube.com/embed/gEPM6-Ow48c",
        "https://www.youtube.com/embed/tnTPaLOaHz8",
        "https://www.youtube.com/embed/WX7DBPcsiEs",
        "https://www.youtube.com/embed/9RhWXPcKBI8",
        "https://www.youtube.com/embed/ubbbQHP7_OI?si=oDWOdDhfuhhU--Je",
        "https://www.youtube.com/embed/ayXxwJJId_c?si=IPZiKAbwfFa47_pv"
      ];



      const navigate = useNavigate();
      const video = [
        "rmxzIWBXc5s",
    "iFtH6g5HEVM",
    "HvWlcpf48x4",
    "5mP4pbOuWAs",
    "QwbK1GUWN30",
    "HTWRB7WUTLw",
    "mGiPlKhWLWM",
    "ElkgC2H1ujU",
    "WGHNsYB42GQ",
    "RhDF0HxKQeo",
    "nuK-GyfV8QU",
    "-nYquuHXNoo",
    "ubj4qsvxRo0",
    "Ce389cNaTdo",
    "gEPM6-Ow48c",
    "tnTPaLOaHz8",
    "WX7DBPcsiEs",
    "9RhWXPcKBI8",
      ]

      const getVideoId = (url) => {
        const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
        return match ? match[1] : null;
      };
    
      const handleVideoClick = (url) => {
        const id = getVideoId(url);
        if (id) {
          navigate(`/video/${id}`);
        }
      };


      
  return (
    // <div className='flex'>
    //   <Slidebar/>
    //   <div className='w-[80%] mt-24'>
    //     <div className='flex space-x-8'>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/rmxzIWBXc5s?si=8BuVBetfooysuH2t" id="1" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/iFtH6g5HEVM?si=Ggim52OHOcFklUIu" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/HvWlcpf48x4?si=d7-CNwL19vuwpTXR" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //     </div>
    //     <div className='flex space-x-8 mt-8'>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/5mP4pbOuWAs?si=_O5FzZ1lQnvSjYxu" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/QwbK1GUWN30?si=p3RtnqJ0AKC5xFpp" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/HTWRB7WUTLw?si=e0wk1NSZD1APDyAk" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //     </div>
    //     <div className='flex space-x-8 mt-8'>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/mGiPlKhWLWM?si=amTd4jpsaoviJZeC" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/ElkgC2H1ujU?si=bdKVK0auQysIvgp2" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/WGHNsYB42GQ?si=lYMvQivJoXxcDsgu" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //     </div>
    //     <div className='flex space-x-8 mt-8'>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/RhDF0HxKQeo?si=5x-Kd3DYASX3i4RX" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/nuK-GyfV8QU?si=XqLj-DegjsMlKUoD" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/-nYquuHXNoo?si=j530SjaDTjLjqIAp" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //     </div>
    //     <div className='flex space-x-8 mt-8'>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/ubj4qsvxRo0?si=WRV1uvHdidf5Ipcz" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/Ce389cNaTdo?si=9oqy8yGbUqFhB26b" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/gEPM6-Ow48c?si=be__DTSM9fgfqnrd" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //     </div>
    //     <div className='flex space-x-8 mt-8'>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/tnTPaLOaHz8?si=IMjaJcN4Bd4BLj_W" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/WX7DBPcsiEs?si=aMvYrNvTzxBULwAW" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/9RhWXPcKBI8?si=KO2DDC7i9m-n_8bm" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //     </div>
    //     <div className='flex space-x-8 mt-8 mb-8'>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/iFtH6g5HEVM?si=Ggim52OHOcFklUIu" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //         <iframe width="340" height="200" src="https://www.youtube.com/embed/tnTPaLOaHz8?si=IMjaJcN4Bd4BLj_W" className='rounded-lg hover:rounded-none duration-200' title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    //     </div>
    //   </div>
    // </div>

    <div className='flex'>
    <Slidebar />
    <div className='w-[80%] mt-24 mb-8'>
        <List/>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
        {videos.map((videoUrl, index) => (
          <div key={index} className='cursor-pointer' onClick={() => handleVideoClick(videoUrl)}>
            <iframe
              width="340"
              height="200"
              src={videoUrl + "?si=" + Math.random().toString(36).substring(2, 15)}
              className='rounded-lg hover:rounded-none duration-200'
              title="YouTube video player"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Home
