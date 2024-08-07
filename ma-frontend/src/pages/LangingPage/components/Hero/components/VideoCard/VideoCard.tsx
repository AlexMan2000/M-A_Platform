import styles from './VideoCard.module.less'
import React, { useEffect, useRef } from 'react'
interface VideoCardProps {
  video: string
  playing: boolean
}

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  playing,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [playing])


  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        loop={true}
        muted={true}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoCard