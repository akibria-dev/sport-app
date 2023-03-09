import { useNavigate } from "react-router-dom";
import News from "../News/News";
import "./Boxing.css";

function Boxing() {
  const navigate = useNavigate();
  return (
    <container className="boxing-grid">
      <div className="boxing-header">Boxing News and Results</div>
      <div className="boxing-left-column">
        <div className="boxing-inner-left-row">
          <div
            className="boxing-inner-left-box"
            onClick={() => navigate("/main")}
          >
            Home
          </div>
          <div className="boxing-inner-left-box">Results&Schedule</div>
          <div className="boxing-inner-left-box">Calender</div>
        </div>
      </div>
      <div className="boxing-center-column"></div>
      <div className="boxing-right-column">
        <News />
      </div>
    </container>
  );
}
export default Boxing;
