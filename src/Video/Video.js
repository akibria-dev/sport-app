import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }
  componentDidMount() {
    fetch("https://www.scorebat.com/video-api/v1/")
      .then((response) => response.json())
      .then((data) => this.setState({ videos: data }));
  }
  render() {
    return (
      <div className="video-container">
        {this.state.videos.map((allVideos) => (
          <div
            className="videos"
            key={allVideos.title}
            onClick={() => window.open(allVideos.url)}
          >
            <div className="thumbnail">
              <img src={allVideos.thumbnail} alt="#" />
            </div>
            <div className="title">
              <p> {allVideos.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Video;
