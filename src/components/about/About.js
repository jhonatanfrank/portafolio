import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Dejame contarte algo sobre mi:</h3>
        <p>
          Estudiante de Desarrollo de Sistemas con habilidad para todo
          desempeño, facilidad de relación, proactivo, honradez, honestidad y
          alto sentido de responsabilidad en beneficio de la organización.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
