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
        <br></br>
        <p>
          <ol>
            <ul>
              <b>DIRECCION:</b> Sector: 6, Grupo: 5, Mz: “L”, Lote: 22 - VILLA
              EL SALVADOR
            </ul>
            <ul>
              <b>LUGAR Y FECHA DE NACIMIENTO:</b> VILLA EL SALVADOR - JUAN PABLO
              II; 08/06/1997
            </ul>
            <ul>
              <b>EDAD:</b> 24
            </ul>
            <ul>
              <b>TELEFONO: </b>976 407 080 / (01) 2881973
            </ul>
            <ul>
              <b>DNI:</b> 71710860
            </ul>
            <ul>
              <b>CORREO ELECTRONICO:</b> frank_mch97@hotmail.com
            </ul>
          </ol>
        </p>
        <p>
          <br></br>
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
