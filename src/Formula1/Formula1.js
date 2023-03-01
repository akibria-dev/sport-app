import { useNavigate } from "react-router-dom";
import News from "../News/News";
import "./Formula1.css";

function Formula1() {
  const navigate = useNavigate();
  return (
    <container className="f1l-grid">
      <div className="f1-header">Formula1 Results and News</div>
      <div className="f1-left-column">
        <div className="f1-inner-left-row">
          <div className="f1-inner-left-box" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="f1-inner-left-box">Results</div>
          <div className="f1-inner-left-box">Standings</div>
          <div className="f1-inner-left-box">Calender</div>
          <div className="f1-inner-left-box">Teams & Drivers</div>
        </div>
      </div>
      <div className="f1-center-column"></div>
      <div className="f1-right-column">
        <News />
      </div>
    </container>
  );
}
export default Formula1;