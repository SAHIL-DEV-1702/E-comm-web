import React from 'react'

const VideoPlayer = (props) => {
  console.log("VideoPlayer props:", props);

  return (
    <>
      <div className=" flex flex-row gap-4 bg-blue-100 justify-center ">
        
        <video
          src={props.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-5xl h-150 mt-4 border-2 object-cover border-white rounded-3xl "
        />


      </div>

    </>
  )
}

export default VideoPlayer