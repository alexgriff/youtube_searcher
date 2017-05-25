import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = (props) => {
  // console.log('props in VideoList', props);
  const videos = props.videos.map(video => (
    <VideoListItem
      key={video.etag}
      video={video}
      onClick={props.onVideoSelectClick}
    />
  ))
  return (
    <div className="four wide column">
    <div className="ui items">
      { videos }
    </div>
  </div>
)
}

export default VideoList
