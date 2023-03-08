import { useNavigate } from "react-router";
import "./Rugby.css";
import News from "../News/News";

function Rugby() {
  const navigate = useNavigate();
  return (
    <container className="rl-grid">
      <div className="r-header">Rugby News and Results</div>
      <div className="r-left-column">
        <div className="r-inner-left-row">
          <div className="r-inner-left-box" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="r-inner-left-box">Scores & Fixtures</div>
          <div className="r-inner-left-box">Tables</div>
          <div className="r-inner-left-box">Video</div>
          <div className="r-inner-left-box">English</div>
          <div className="r-inner-left-box">Scottish</div>
          <div className="r-inner-left-box">Welsh</div>
          <div className="r-inner-left-box">Irish</div>
          <div className="r-inner-left-box">All Teams</div>
        </div>
      </div>
      <div className="r-center-column"></div>
      <div className="r-right-column">
        <News />
      </div>
    </container>
  );
}
export default Rugby;
