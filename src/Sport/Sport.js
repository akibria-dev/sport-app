import { BiFootball, BiHome, BiRun } from "react-icons/bi";
import CommentBox from "../Comments/Comments";
import {
  MdSportsCricket,
  MdSportsRugby,
  MdSportsTennis,
  MdSportsGolf,
} from "react-icons/md";
import { GiRaceCar, GiBoxingGloveSurprise } from "react-icons/gi";
// import { "fa-sharp fa-solid fa-futbol" } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import News from "../News/News";
import Video from "../Video/Video";
import "./Sport.css";
function Sport() {
  const navigate = useNavigate();

  return (
    <container className="l-grid">
      <div className="header">
        <ul>
          <li className="allsports" onClick={() => navigate("/")}>
            ALL SPORTS
          </li>
          <li className="mysports" onClick={() => navigate("/favourite")}>
            MY SPORTS
          </li>

          <li
            style={{ fontSize: 20 }}
            className="logout"
            onClick={() => navigate("/home")}
          >
            Log out
          </li>
        </ul>
      </div>
      <div className="left-column">
        <div className="inner-left-row">
          <div className="inner-left-box">
            {" "}
            <BiHome />
            Home
          </div>
          <div className="inner-left-box" onClick={() => navigate("/football")}>
            <BiFootball />
            Football
          </div>
          <div className="inner-left-box" onClick={() => navigate("/cricket")}>
            <MdSportsCricket />
            Cricket
          </div>
          <div className="inner-left-box" onClick={() => navigate("/formula1")}>
            <GiRaceCar />
            Formula1
          </div>
          <div className="inner-left-box" onClick={() => navigate("/rugby")}>
            <MdSportsRugby />
            Rugby
          </div>
          <div className="inner-left-box" onClick={() => navigate("/tennis")}>
            <MdSportsTennis />
            Tennis
          </div>
          <div className="inner-left-box" onClick={() => navigate("/golf")}>
            <MdSportsGolf /> Golf
          </div>
          <div className="inner-left-box" onClick={() => navigate("/boxing")}>
            <GiBoxingGloveSurprise />
            Boxing
          </div>
          <div
            className="inner-left-box"
            onClick={() => navigate("/athletics")}
          >
            <BiRun />
            Athletics
          </div>
        </div>
      </div>
      <div className="center-column">
        Latest News
        <News />
        <CommentBox />
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
      <div className="right-column">Latest Videos{<Video />}</div>
    </container>
  );
}
export default Sport;
