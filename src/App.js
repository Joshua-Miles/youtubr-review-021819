import React, { Component } from "react";
import {keys} from "./keys";
import { VideoPlayer } from "./VideoPlayer";
import { Search } from "./Search";
import { SuggestedList } from "./SuggestedList";

class App extends Component {
  
  state = {
    input: '',
    videos: [],
    currentlyPlaying: null
  }

  searchFor = (searchTerm) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${searchTerm}&type=video`)
      .then(res => res.json())
      .then( videos => this.setState({ videos: videos.items }) )
  }

  changeSearch = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  selectVideo = (video) => {
    this.setState({
      currentlyPlaying: video
    })
  }

  render() {
    return (
      <div>
        <Search 
          value={this.state.input} 
          onChange={this.changeSearch} 
          onSubmit={this.searchFor}
        />
        <VideoPlayer {...this.state.currentlyPlaying} />
        <SuggestedList videos={this.state.videos} onVideoSelected={this.selectVideo}/>
      </div>
    )
  }
}

export default App;
