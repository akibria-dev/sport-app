import { useNavigate } from "react-router-dom";
import Video from "../Video/Video";
import "./Standings.css";
import F1DriverStandings from "../Formula1/DriverStandings";
function DriverStanding() {
  const navigate = useNavigate();
  return (
    <container className="standingl-grid">
      <div className="standing-header">Formula1 News and Results</div>
      <div className="standing-left-column">
        <div className="standing-inner-left-row">
          <div
            className="standing-inner-left-box"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div className="standing-inner-left-box">Results</div>
          <div
            className="standing-inner-left-box"
            onClick={() => navigate("/formula1/standings")}
          >
            Standings
          </div>
          <div className="standing-inner-left-box">Calender</div>
          <div className="standing-inner-left-box">Teams & Drivers</div>
        </div>
      </div>
      <div className="standing-center-column">
        <F1DriverStandings />
      </div>
      <div className="standing-right-column">Latest Videos{<Video />}</div>
    </container>
  );
}
export default DriverStanding;
