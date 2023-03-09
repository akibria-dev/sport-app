import { useNavigate } from "react-router-dom";
import News from "../News/News";
import "./Athletics.css";

function Athletics() {
  const navigate = useNavigate();
  return (
    <container className="athletics-grid">
      <div className="athletics-header">Athletics News and Results</div>
      <div className="athletics-left-column">
        <div className="athletics-inner-left-row">
          <div
            className="athletics-inner-left-box"
            onClick={() => navigate("/main")}
          >
            Home
          </div>
          <div className="athletics-inner-left-box">Results</div>
          <div className="athletics-inner-left-box">Calender</div>
        </div>
      </div>
      <div className="athletics-center-column"></div>
      <div className="athletics-right-column">
        <News />
      </div>
    </container>
  );
}
export default Athletics;
