import { useNavigate } from "react-router-dom";
import News from "../News/News";
import "./Tennis.css";

function Tennis() {
  const navigate = useNavigate();
  return (
    <container className="tennisl-grid">
      <div className="tennis-header">Tennis News and Results</div>
      <div className="tennis-left-column">
        <div className="tennis-inner-left-row">
          <div
            className="tennis-inner-left-box"
            onClick={() => navigate("/main")}
          >
            Home
          </div>
          <div className="tennis-inner-left-box">Live Scores</div>
          <div className="tennis-inner-left-box">Results</div>
          <div className="tennis-inner-left-box">Calender</div>
          <div className="tennis-inner-left-box">Video</div>
        </div>
      </div>
      <div className="tennis-center-column"></div>
      <div className="tennis-right-column">
        <News />
      </div>
    </container>
  );
}
export default Tennis;
