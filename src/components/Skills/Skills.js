import React from "react";
import CardSkills from "./CardSkills";
import {
  FaPalette,
  FaLaptopCode,
  FaPaintBrush,
  FaPiedPiperSquare,
} from "react-icons/fa";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <section className="skills__section section" id="skills">
      <div className="skills__header">
        <h4>What i Do</h4>
        <h2>How I can help your next project</h2>
      </div>

      <div className="skills__content">
        <CardSkills
          icons={<FaPalette />}
          title="Graphic Design"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
        <CardSkills
          icons={<FaLaptopCode />}
          title="Frontend"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
        <CardSkills
          icons={<FaPaintBrush />}
          title="Web Design"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
        <CardSkills
          icons={<FaPiedPiperSquare />}
          title="Adobe"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
        />
      </div>

      <div className="skills__technologies">
        <h2>Professional skills</h2>
        <div className="progress__container">
          <ProgressBar title="HTML/CSS" procentage={90} filled={90} />
          <ProgressBar title="Web Design" procentage={80} filled={80} />
          <ProgressBar title="React JS" procentage={70} filled={70} />
          <ProgressBar title="Adobe" procentage={75} filled={75} />
          <ProgressBar title="WordPress" procentage={45} filled={45} />
          <ProgressBar title="GIT" procentage={60} filled={60} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
