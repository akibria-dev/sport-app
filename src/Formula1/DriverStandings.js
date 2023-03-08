import React, { useState } from "react";

import "./F1.css";

function F1DriverStandings() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const callApi = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "972f6c46fbmsh884be1944cd8841p1a86e5jsn0d0abb9c967b",
        "X-RapidAPI-Host": "f1-live-motorsport-data.p.rapidapi.com",
      },
    };
    fetch(
      `https://f1-live-motorsport-data.p.rapidapi.com/drivers/standings/${inputValue}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  };
  return (
    <div className="f1-driver-news-container">
      <input
        type="text"
        placeholder="Select a year"
        style={{ backgroundColor: "blue", fontWeight: "bold", color: "white" }}
        value={inputValue}
        onChange={handleInputChange}
      />

      <button
        style={{ backgroundColor: "cyan", fontWeight: "bold" }}
        onClick={callApi}
      >
        Results
      </button>
      <p></p>
      <p style={{ fontWeight: "bolder", fontSize: "30px" }}>Driver Standings</p>
      {data.map((driverinfo) => (
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

export default F1DriverStandings;
