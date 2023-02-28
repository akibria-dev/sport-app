import React, { Component } from "react";
import "../Cricket/Cricket.css";
class CricketNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cricketNews: [],
    };
  }

  componentDidMount() {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "972f6c46fbmsh884be1944cd8841p1a86e5jsn0d0abb9c967b",
    //     "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    //   },
    // };
    fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=44d592ff-8b69-438e-84d0-b24f9fa36012&offset=0"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ cricketNews: data.data }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="cricket-news-container">
        {this.state.cricketNews.map((cricket) => (
          <div className="cricket-News-container">
            <div className="title">
              {cricket.name}
              {cricket.matchType}
              {cricket.status}
              {cricket.venue}
              {cricket.date}
              {cricket.teams}
              {/* {cricket.teamInfo} */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CricketNews;
