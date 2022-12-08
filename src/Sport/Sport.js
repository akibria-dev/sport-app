// import News from "./News";
import News from "../News/News";
import "./Sport.css";
function Sport() {
  return (
    <container class="l-grid">
      <div class="header">AK Sport</div>
      <div class="left-column">
        <div class="inner-left-row">
          <div class="inner-left-box">Home</div>
          <div class="inner-left-box">Football</div>
          <div class="inner-left-box">Cricket</div>
          <div class="inner-left-box">Rugby</div>
          <div class="inner-left-box">Formula1</div>
          <div class="inner-left-box">Hockey</div>
          <div class="inner-left-box">Basketball</div>
          <div class="inner-left-box">Golf</div>
          <div class="inner-left-box">NBA</div>
          <div class="inner-left-box">Snooker</div>
          <div class="inner-left-box">Athletics</div>
        </div>
      </div>
      <div class="center-column">Main</div>
      <div class="right-column">
        <News /> News
      </div>
    </container>
  );
}
export default Sport;
