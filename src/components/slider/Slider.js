import React from "react";
import "../slider/Slider.css";

const Slider = () => {
  return (
    <div className="contenedor-slider">
      <h3 className="titulo-proyecto">Proyectos:</h3>
      <div className="contenedor-principal">
        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">
              Portal web para alquilar vehiculos (Frontend)
            </h3>
          </div>
          <div className="contenedor-imagen">
            <img
              src={require("../slider/alquilerdevehiculos2.jpg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Portal web para alquilar vehiculos, con pasarela de pago PAYPAL incluido.
            </p>
            <p className="parrafo-proyecto">
              Para poder desplegar este proyecto, se necesita desplegar tambien
              "Alquiler de Vehiculos (Backend)"
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: React, Javascript, HTML, CSS, Bootstrap.
            </p>
          </div>
          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/alquiler-vehiculos.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://alquiler-vehiculos-jhonatanfrank.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">
              Sistema para el control del Alquiler de vehiculos (Administrativo)
            </h3>
          </div>
          <div className="contenedor-imagen">
            <img
              src={require("../slider/alquilerdevehiculos2.jpg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Sistema Administrativo para tener el control del alquiler de vehiculos, tales como ver reportes, alquileres, mantenimiento, entre otros.
            </p>
            <p className="parrafo-proyecto">
              Para poder desplegar este proyecto, se necesita desplegar tambien
              "Alquiler de Vehiculos (Backend)"
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: React, Javascript, HTML, CSS, Bootstrap.
            </p>
          </div>
          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/alquiler-vehiculos-admin.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://alquiler-vehiculos-admin-jhonatanfrank.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">Alquiler de Vehiculos (Backend)</h3>
          </div>
          <div className="contenedor-imagen">
            <img
              src={require("../slider/alquilerdevehiculos2.jpg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Backend de Alquiler de Vehiculos. (Spring Boot)
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: Java, SpringBoot, Lombok.
            </p>
          </div>
          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/backend-alquiler-vehiculos.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">Rick and Morty (Frontend)</h3>
          </div>
          <div className="contenedor-imagen-proyecto">
            <img
              src={require("../slider/rickandmorty.jpg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Listado de los personajes de la serie.
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: React, HTML, CSS, Javascript.
            </p>
          </div>
          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/rick-and-morty.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://rick-and-morty-sand-seven.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">Pokemón (Frontend)</h3>
          </div>
          <div className="contenedor-imagen">
            <img
              src={require("../slider/pokemon.jpg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Listado de los personajes del anime.
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: React, HTML, CSS, Javascript.
            </p>
          </div>

          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/pokemon.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://pokemon-ruddy-ten.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">Mundial de Qatar 2022 (Frontend)</h3>
          </div>
          <div className="contenedor-imagen">
            <img
              src={require("../slider/mundialqatar.jpg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Realiza tu propio pronostico del Mundial.
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: HTML, CSS, Javascript.
            </p>
          </div>

          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/mundial-qatar2022.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://mundial-qatar2022-jhonatanfrank.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">Predicción del clima (Frontend)</h3>
          </div>
          <div className="contenedor-imagen">
            <img
              src={require("../slider/clima.jpeg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Consumo de API de prediccion del clima.
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: React, HTML, CSS, Javascript.
            </p>
          </div>

          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/openweather.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://openweather-jhonatanfrank.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">Clientes (Frontend)</h3>
          </div>
          <div className="contenedor-imagen">
            <img
              src={require("../slider/usuarios.jpg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Consumo de una API de 10 clientes.
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: React, HTML, CSS, Javascript.
            </p>
          </div>
          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/clients.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://clients-jhonatanfrank.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">Cajero Automatico</h3>
          </div>
          <div className="contenedor-imagen">
            <img
              src={require("../slider/cajeroautomatico.jpg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Una simulacion básica de un cajero automatico realizado en
              lenguaje de programacion PYTHON. (Habilitar los permisos de
              descarga del navegador)
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: Python.
            </p>
          </div>
          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/cajero-automatico-python.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="./CajeroAutomatico.exe" target="_blank" rel="noreferrer">
              <i class="fa-solid fa-download"></i>
            </a>
          </div>
        </div>

        <div className="contenedor-item">
          <div className="contenedor-nombre">
            <h3 className="subtitulo-proyecto">Alquiler de Vehiculos (Backend)</h3>
          </div>
          <div className="contenedor-imagen">
            <img
              src={require("../slider/alquilerdevehiculos.jpg")}
              className="imagen"
              alt="img"
            />
          </div>
          <div className="contenedor-descripcion">
            <p className="parrafo-proyecto">
              Backend de un CRUD de Alquiler de Vehiculos.
            </p>
            <p className="parrafo-proyecto">
              Tecnologías: Java, SpringBoot.
            </p>
          </div>
          <div className="contenedor-links">
            <a
              href="https://github.com/jhonatanfrank/alquiler-de-vehiculos.git"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
