import React, { Component } from "react";
import "./F1.css";
class F1driverStandings extends Component {
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
        "X-RapidAPI-Host": "f1-live-motorsport-data.p.rapidapi.com",
      },
    };
    fetch(
      "https://f1-live-motorsport-data.p.rapidapi.com/drivers/standings/2022",
      options
    )
      .then((response) => response.json())
      .then((response) => this.setState({ f1News: response.results }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="f1-driver-news-container">
        {this.state.f1News.map((driverinfo) => (
          <div className="f1-driverStandings-container">
            <div className="f1-driver-title">
              <div key={driverinfo.id}>
                <p>Position:{driverinfo.position}</p>
                <p>Points:{driverinfo.points}</p>
                <p>Driver Name:{driverinfo.driver_name}</p>
                <p>Team Name:{driverinfo.team_name}</p>
                <p>Nationality: {driverinfo.nationality}</p>
                <p>Season:{driverinfo.season}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default F1driverStandings;
