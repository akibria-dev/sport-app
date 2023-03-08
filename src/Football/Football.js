import { useNavigate } from "react-router-dom";
import News from "../News/News";
import Video from "../Video/Video";
import "./Football.css";

function Football() {
  const navigate = useNavigate();
  return (
    <container className="fl-grid">
      <div className="f-header">Football Results and News</div>
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
      <div className="f-right-column">Latest Videos{<Video />}</div>
    </container>
  );
}
export default Football;
