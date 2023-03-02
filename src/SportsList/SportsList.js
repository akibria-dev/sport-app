import { useNavigate } from "react-router-dom";
import "./SportsList.css";
function SportsList() {
  const navigate = useNavigate();

  return (
    <container className="l-grid">
      <div className="header">
        <ul>
          <li className="allsports" onClick={() => navigate("/")}>
            ALL SPORTS
          </li>
          <li className="mysports" onClick={() => navigate("/favsports")}>
            MY SPORTS
          </li>
        </ul>
      </div>
      <div className="left-column">
        <div className="inner-left-row">
          <div className="inner-left-box">
            Football<button>Add</button>
          </div>
          <div className="inner-left-box">
            Cricket<button>Add</button>
          </div>
          <div className="inner-left-box">
            Formula1<button>Add</button>
          </div>
          <div className="inner-left-box">
            Rugby<button>Add</button>
          </div>
          <div className="inner-left-box">
            Tennis<button>Add</button>
          </div>
          <div className="inner-left-box">
            Golf<button>Add</button>
          </div>
          <div className="inner-left-box">
            Boxing<button>Add</button>
          </div>
          <div className="inner-left-box">
            Athletics<button>Add</button>
          </div>
        </div>
      </div>
      <div className="center-column">
        {/* favoritelist will create and show "<Favourite>/" */}
      </div>
    </container>
  );
}
export default SportsList;
