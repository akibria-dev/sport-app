import { useNavigate } from "react-router-dom";
import Video from "../Video/Video";
import "./Formula1.css";
import F1News from "../Formula1/F1News";
function Formula1() {
  const navigate = useNavigate();
  return (
    <container className="f1l-grid">
      <div className="f1-header">Formula1 News ans Results</div>
      <div className="f1-left-column">
        <div className="f1-inner-left-row">
          <div className="f1-inner-left-box" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="f1-inner-left-box">Results</div>
          <div
            className="f1-inner-left-box"
            onClick={() => navigate("/formula1/standings")}
          >
            Standings
          </div>
          <div className="f1-inner-left-box">Calender</div>
          <div className="f1-inner-left-box">Teams & Drivers</div>
        </div>
      </div>
      <div className="f1-center-column">
        <F1News />
      </div>
      <div className="f1-right-column">Latest Videos{<Video />}</div>
    </container>
  );
}
export default Formula1;
