// import ScrollMenu from "react-horizontal-scrolling-menu";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../styles/Styles.css";
import HorizontalProjectMenu from "../components/HorizontalProjectSummaries/HorizontalProjectMenu";
import MarkPointOnMap from "../components/MarkPointOnMap";
import MarkPointOnMap2 from "../components/MarkPointOnMap2";
import "../styles/MarkPointOnMap2.css";

export default function Map() {
  return (
    <div>
      <div className="map-spacer-top"></div>
      <MarkPointOnMap2 />
      <div className="map-spacer-bottom"></div>
      {/* <MarkPointOnMap /> */}
      <Header />
      <HorizontalProjectMenu />
      <Navbar />
    </div>
  );
}
