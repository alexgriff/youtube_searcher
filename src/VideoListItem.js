import React from 'react'

const VideoListItem = ({video, onClick}) => {
  const url = video.snippet.thumbnails.default.url
  return (
    <div
      className="item"
      onClick={() => onClick(video)}
      >
      <div className="ui small image">
        <img src={url} />
      </div>
      <div className="content">
        {video.snippet.title}
      </div>
    </div>
  )
}

export default VideoListItem
