import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../styles/Styles.css";

const ProjectGallery = ({ projectImageUrls }) => {
  const objectImages = Object.values(projectImageUrls);
  const slideImages = objectImages
    .map((element) => element.image)
    .filter((url) => url !== "");

  const properties = {
    prevArrow: <div style={{ textDecoration: "transparent" }}></div>,
    nextArrow: <div style={{ textDecoration: "transparent" }}></div>,
  };

  return (
    <div className="slide-container">
      <div className="gallery-container">
        <Slide {...properties}>
          {slideImages.map((each, index) => {
            return (
              <div key={index} className="each-slide">
                <div style={{ backgroundImage: `url(${each})` }}></div>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default ProjectGallery;
