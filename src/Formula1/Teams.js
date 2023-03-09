import React, { useState } from "react";
import "./F1.css";
// class F1TeamNews extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       f1News: [],
//     };
//   }
function F1TeamNews() {
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
        "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
      },
    };
    fetch(
      "https://api-formula-1.p.rapidapi.com/rankings/teams?season=2022",
      options
    )
      .then((response) => response.json())
      .then((data) => setData(data.response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="f1-news-container">
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
      <p style={{ fontWeight: "bolder", fontSize: "30px" }}>Team Standings</p>

      {data.map((f1newsinfo) => (
        <div className="f1sports-news-container">
          <div className="f1title">
            <div key={f1newsinfo.id}>
              <p>Position:{f1newsinfo.position}</p>
              <p>Team:{f1newsinfo.team.name}</p>
              <p>Points:{f1newsinfo.points}</p>
              <p>Season:{f1newsinfo.season}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default F1TeamNews;
