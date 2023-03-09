import { useNavigate } from "react-router-dom";
import CricketNews from "../CricketNews/CricketNews";

import News from "../News/News";
import "./Cricket.css";

function Cricket() {
  const navigate = useNavigate();

  return (
    <container className="cl-grid">
      <div className="c-header">Cricket News and Results</div>
      <div className="c-left-column">
        <div className="c-inner-left-row">
          <div className="c-inner-left-box" onClick={() => navigate("/main")}>
            Home
          </div>
          <div className="c-inner-left-box">Scores & Fixtures</div>
          <div className="c-inner-left-box">Tables</div>
          <div className="c-inner-left-box">Video</div>
          <div className="c-inner-left-box">England Men</div>
          <div className="c-inner-left-box">England Women</div>
          <div className="c-inner-left-box">The Hundred</div>
          <div className="c-inner-left-box">All Teams</div>
          <div className="c-inner-left-box">Counties</div>
        </div>
      </div>
      <div className="c-center-column">
        Cricket Matches
        <CricketNews />
      </div>
      <div className="c-right-column">
        <News />
      </div>
    </container>
  );
}
export default Cricket;
