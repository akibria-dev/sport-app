import { useNavigate } from "react-router-dom";
import News from "../News/News";
import "./Football.css";
import Video from "../Video/Video";
function Football() {
  const navigate = useNavigate();
  return (
    <container className="fl-grid">
      <div className="f-header">Football News and Results</div>
      <div className="f-left-column">
        <div className="f-inner-left-row">
          <div className="f-inner-left-box" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="f-inner-left-box">Scores & Fixtures</div>
          <div className="f-inner-left-box">Tables</div>
          <div className="f-inner-left-box">Top Scorers</div>
          <div className="f-inner-left-box">Transfers</div>
          <div className="f-inner-left-box">Women</div>
          <div className="f-inner-left-box">FA Cup</div>
          <div className="f-inner-left-box">All Teams</div>
          <div className="f-inner-left-box">Leagues & Cups</div>
        </div>
      </div>
      <div className="f-center-column">
        Latest News
        <News />
      </div>
      <div className="f-right-column">{<Video />}</div>
    </container>
  );
}
export default Football;
