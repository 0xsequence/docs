import React, { useEffect, useRef } from 'react'

const Video = (props: any) => {
  const imageRef = useRef<any>(null)
  const videoRef = useRef<any>(null)
  const width = props.width ? props.width : '560'
  const height = props.height ? props.height : '315'

  useEffect(() => {
    const handleClick = () => {
      if (videoRef.current && imageRef.current) {
        videoRef.current.style.display = 'block'
        imageRef.current.style.display = 'none'
        videoRef.current.muted = false
        videoRef.current.play() // Start playing the video
      }
    }

    const image = imageRef.current
    image.addEventListener('click', handleClick)

    return () => {
      image.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="video-container">
      <img
        ref={imageRef}
        className="preview-image"
        width={width}
        height={height}
        src={props.videoPreviewSrc}
        alt="Preview"
      />
      <video
        ref={videoRef}
        className="video-frame"
        width={width}
        height={height}
        controls
        muted
        src={props.videoSrc}
        // @ts-ignore
        type="video/mp4"
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default Video
