import React from 'react'

const VideoPlayer = (props) => {
  return (
    <>
      <div className=" flex flex-row overflow-scroll gap-4 bg-blue-100 ">

        <video src={props.src} autoPlay loop muted playsInline className='video-player rounded-2xl w-full h-96 display-block mt-2  ' />

      </div>
    </>
  )
}

export default VideoPlayer