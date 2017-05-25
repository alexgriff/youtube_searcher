import React from 'react'

const VideoDetail = ({video}) => {
  // console.log('props in VideoDetail', video);
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe src={url} frameBorder="0"></iframe>
          </div>
        </div>
        <div className="ui segment">
          {video.snippet.title}
        </div>
        <div className="ui segment secondary">
          {video.snippet.description}
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
