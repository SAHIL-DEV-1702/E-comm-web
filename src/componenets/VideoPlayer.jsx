import React from 'react'

const VideoPlayer = (props) => {
  return (
    <>
      <div className="videoContainer flex flex-wrap ">
        <video src={props.src2} autoPlay loop muted playsInline className='video-player' />


      </div>
    </>
  )
}

export default VideoPlayer