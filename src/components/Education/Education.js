import React from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

function Education() {
  return (
    <section id="education" className="section">
      <div className="education__header">
        <h4>Resume</h4>
        <h2>A summary of My Resume</h2>
      </div>
      <div className="education__content">
        <div className="education">
          <h1>My Education</h1>
          <EducationCard />
        </div>
        <div className="experience">
          <h1>My Experience</h1>
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}

export default Education;
