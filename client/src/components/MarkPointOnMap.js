import React, { useState, useEffect } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import * as parkDate from "../data/calgary-buildings.json"
import './MarkPointOnMap.css'

function MarkPointOnMap() {
   const [viewport, setViewport] = useState({
      latitude: 51.0447,
      longitude: -114.0719,
      width: "100vw",
      height: "100vh",
      zoom: 14
   })
   const [selectedPark, setSelectedPark] = useState(null)

   useEffect(() => {
      const listener = e => {
         if (e.key === "Escape") {
            setSelectedPark(null)
         }
      }
      window.addEventListener("keydown", listener)

      return () => {
         window.removeEventListener("keydown", listener)
      }
   }, [])

   return (
      <div>
         <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoiNG5hdmluIiwiYSI6ImNrcXI1ZmZleTBoeTAyb214Z3p6YTV4Ym0ifQ.VDPYZg-kHBSFmV88mjM8Fg"
            // mapStyle="mapbox://styles/4navin/ckqb7gi7q1mpr19laybxakhhf"
            onViewportChange={viewport => {
               setViewport(viewport)
            }}
         >
            {parkDate.features.map(park => (
               <Marker
                  key={park.properties.PARK_ID}
                  latitude={park.geometry.coordinates[1]}
                  longitude={park.geometry.coordinates[0]}
               >
                  <button
                     className="marker-btn"
                     onClick={e => {
                        e.preventDefault()
                        setSelectedPark(park)
                     }}
                  >
                     <img src={park.properties.PICTURE_LI} alt="Building In Calgary" />
                  </button>
               </Marker>
            ))}

            {selectedPark ? (
               <Popup
                  latitude={selectedPark.geometry.coordinates[1]}
                  longitude={selectedPark.geometry.coordinates[0]}
                  onClose={() => {
                     setSelectedPark(null)
                  }}
               >
                  <div>
                     <img className="img-description-on-map" src={selectedPark.properties.PICTURE_LI} />
                     <h2>{selectedPark.properties.NAME}</h2>
                     <p>{selectedPark.properties.FACILITY_F}</p>
                     <p>{selectedPark.properties.ADDRESS}</p>
                     <p>{selectedPark.properties.DESCRIPTIO}</p>
                  </div>
               </Popup>
            ) : null}
         </ReactMapGL>
      </div>
   )
}

export default MarkPointOnMap