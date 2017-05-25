import React, { Component } from 'react';
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import axios from 'axios'
import _ from 'lodash'

// const API_KEY = "..."

class App extends Component {
  constructor() {
    super()

    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount() {
    this.videoSearch()
  }

  videoSearch(input) {
    const searchTerm = input || 'puppies'

    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video`)
      .then( response => {
        const videos = response.data.items
        this.setState({
          videos,
          selectedVideo: videos[0]
        })
      })
  }

  handleVideoSelectClick(video) {
    this.setState({
      selectedVideo: video
    })
  }

  handleInputChange(input) {
    this.setState({ input })
    this.videoSearch(input)
  }


  render() {
    console.log('app rendering:', this.state.input);
    //returns inner function that can only be run every 200 milliseconds
    const videoSearch = _.debounce((input) => {this.videoSearch(input)}, 200)

    return (
      <div className="ui grid container">
        <SearchBar onChange={(input) => videoSearch(input)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelectClick={(video) => this.handleVideoSelectClick(video)}
        />
      </div>
    );
  }
}

export default App;
