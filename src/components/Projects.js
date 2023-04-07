import React from "react";
import Lightroom from "react-lightbox-gallery";
import photos from "../DataPhotos";
import styled from "styled-components";

function Projects() {
  const settings = {
    columnCount: {
      default: 4,
      mobile: 3,
      tab: 4,
    },
    mode: "light",
  };
  return (
    <section className="projects__section section" id="projects">
      <div className="project__header">
        <h4>Portfolio</h4>
        <h2>Some of my most recent projects</h2>
      </div>

      <div className="projects__content">
        <Lightroom images={photos} settings={settings} />
      </div>
    </section>
  );
}

export default Projects;

const Card = styled.div``;
