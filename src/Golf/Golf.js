import { useNavigate } from "react-router-dom";
import News from "../News/News";
import "./Golf.css";

function Golf() {
  const navigate = useNavigate();
  return (
    <container className="golfl-grid">
      <div className="golf-header">Football Results and News</div>
      <div className="golf-left-column">
        <div className="golf-inner-left-row">
          <div className="golf-inner-left-box" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="golf-inner-left-box">Leaderboard</div>
          <div className="golf-inner-left-box">Calender</div>
          <div className="golf-inner-left-box">Video</div>
        </div>
      </div>
      <div className="golf-center-column"></div>
      <div className="golf-right-column">
        <News />
      </div>
    </container>
  );
}
export default Golf;
