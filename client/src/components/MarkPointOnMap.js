/* eslint-disable */
// import mapboxgl from "mapbox-gl";
import mapboxgl from "!mapbox-gl";
import React, { useRef, useEffect, useState, useContext } from "react";
import ClassificationContext from "../store/ClassificationContext";
import GlossaryContext from "../store/GlossaryContext";
import "../styles/Styles.css";
import "../styles/MarkPointOnMap.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MarkPointOnMap({ setSelectedProjectIndex, selectedProjectIndex }) {
  let glossaryContext = useContext(GlossaryContext);
  const mapContainer = useRef(null);
  const classificationCtx = useContext(ClassificationContext);
  const features = Array.from(classificationCtx.projects);
  const [map, setMap] = useState(null);

  useEffect(() => {
    let pins = [];
    if (map) {
      features.forEach((feature, index) => {
        let el = document.createElement("div");
        pins.push(el);
        if (index === selectedProjectIndex) {
          el.className = `red-marker`;
        } else {
          el.className = `markers`;
        }
        new mapboxgl.Marker(el)
          .setLngLat(feature.location.coordinates)
          .addTo(map);
        el.addEventListener("click", () => {
          setSelectedProjectIndex(index);
        });
      });
    }
    const cleanup = () => {
      pins.forEach((pin) => pin.remove());
    };
    return cleanup;
  }, [features, selectedProjectIndex, setSelectedProjectIndex, map]);

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/femibodegeorgeg/cks6lqlra6vmv17p669fj7r46",
      center: [-114.066666, 51.049999],
      zoom: 10,
      attributionControl: true,
    });

    // Add zoom and rotation controls to the map.
    newMap.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true,
      })
    );

    // Add geolocate control to the map.
    newMap.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserLocation: true,
        showAccuracyCircle: true,
        showUserHeading: true,
      })
    );

    setMap(newMap);
  }, [classificationCtx.projects]);

  return (
    <>
      <div>
        <div
          className={`map-spacer-top ${
            glossaryContext.showGlossary ? "display-none" : "display-block"
          }`}
        >
          <div className="map-container" ref={mapContainer} />
          <div className="map-spacer-bottom"></div>
        </div>
      </div>
    </>
  );
}

export default MarkPointOnMap;
