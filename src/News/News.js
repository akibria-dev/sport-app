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
      .then((response) => this.setState({ sportsNews: response.articles }));
  }

  render() {
    return (
      <div className="news-container">
        {this.state.sportsNews.map((sportNews) => (
          <div className="sports-news-container">
            <div className="title">
              {sportNews.title}
              <a href={sportNews.url} target="_self" rel="noreferrer">
                {" >Detail News"}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default News;
