import React, { Component } from "react";
import "./F1.css";
class F1News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      f1News: [],
    };
  }
  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "972f6c46fbmsh884be1944cd8841p1a86e5jsn0d0abb9c967b",
        "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
      },
    };
    fetch("https://api-formula-1.p.rapidapi.com/competitions", options)
      .then((response) => response.json())
      .then((response) => this.setState({ f1News: response.response }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="f1-news-container">
        {this.state.f1News.map((f1newsinfo) => (
          <div className="f1sports-news-container">
            <div className="f1title">
              <div key={f1newsinfo.id}>
                Race:{f1newsinfo.name}
                <p>Country:{f1newsinfo.location.country}</p>
                <p>City:{f1newsinfo.location.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default F1News;
