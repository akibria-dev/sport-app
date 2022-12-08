import React, { Component } from "react";
import "../News/News.css";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sportsNews: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=009148816e8946eaafeaf3fdc9630e12"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ sportsNews: data.articles }));
  }

  render() {
    return (
      <div className="news-container">
        {this.state.sportsNews.map((sportNews) => (
          <div className="sports-news-container">
            <p className="title">{sportNews.title}</p>
            <a href={sportNews.url} target="_blank" rel="noreferrer">
              {"Details News"}
            </a>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
export default News;
