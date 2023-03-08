import React, { Component } from "react";
import ".../Football/FootballNews/FootballNews.css";
class FootballNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footballNews: [],
    };
  }
  componentDidMount() {
    fetch("https://livescore-football.p.rapidapi.com/soccer/news-list?")
      .then((response) => response.json())
      .then((response) => this.setState({ footballNews: response.data }));
  }

  render() {
    return (
      <div className="football-news-container">
        {this.state.footballNews.map((sportNews) => (
          <div className="football-details-news-container">
            <div className="football-news-title">
              {sportNews.caption}
              {sportNews.title}
              {sportNews.image}
              <a href={sportNews.url} target="_self" rel="noreferrer">
                <p>{" Detail News"}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default FootballNews;
