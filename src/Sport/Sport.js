// import News from "./News";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import News from "../News/News";
import Video from "../Video/Video";
import "./Sport.css";
function Sport() {
  const navigate = useNavigate();

  return (
    <container className="l-grid">
      <div className="header">SPORT</div>
      <div className="left-column">
        <div className="inner-left-row">
          <div className="inner-left-box">Home</div>
          <div className="inner-left-box" onClick={() => navigate("/football")}>
            Football
          </div>
          <div className="inner-left-box" onClick={() => navigate("/cricket")}>
            {/* <Cricket /> */}
            Cricket
          </div>
          <div className="inner-left-box" onClick={() => navigate("/formula1")}>
            Formula1
          </div>
          <div className="inner-left-box" onClick={() => navigate("/rugby")}>
            Rugby
          </div>
          <div className="inner-left-box" onClick={() => navigate("/tennis")}>
            Tennis
          </div>
          <div className="inner-left-box" onClick={() => navigate("/golf")}>
            Golf
          </div>
          <div className="inner-left-box" onClick={() => navigate("/boxing")}>
            Boxing
          </div>
          <div
            className="inner-left-box"
            onClick={() => navigate("/athletics")}
          >
            Athletics
          </div>
        </div>
      </div>
      <div className="center-column">
        <News />
        {/* <iframe
          src="https://www.bbc.co.uk/sport/football/63953188/"
          title="W3Schools Free Online Web Tutorials"
          width="50%"
          height="50%"
        ></iframe> */}
        {/* <iframe
          src="https://www.theguardian.com/football/2022/dec/09/armchair-guide-everything-you-need-to-know-about-england-v-france/"
          title="W3Schools Free Online Web Tutorials"
         
        ></iframe> */}
      </div>
      <div className="right-column">{<Video />}</div>
    </container>
  );
}
export default Sport;
