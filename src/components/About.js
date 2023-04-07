import React from "react";
import picture from "../assets/images/front-end-development-services.png";

function About() {
  return (
    <section className="about__me-section section" id="about">
      <div className="about-me__content">
        <div className="about__me">
          <h3>Front-end Developer / React</h3>
          <h1>
            Hello there! <br /> I'm Jogn Doe
          </h1>
          <p>
            I'm a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            results while working with me. Delivering work within time and
            budget which meets client’s requirements is our moto.
          </p>
        </div>
        <div className="photo">
          <img src={picture} alt="" />
        </div>
      </div>
      <div className="about-me__info">
        <div className="info">
          <span className="placeholder">Email</span>
          email@email.com
        </div>
        <div className="info">
          <span className="placeholder">From</span>
          Bucharest
        </div>
      </div>
    </section>
  );
}

export default About;
