import React from 'react'
import "../slider/Slider.css"

const Slider = () => {
  return (
    <div className='contenedor-slider'>
      <h1 className='titulo-proyecto'>Proyectos:</h1>
      <div className='contenedor-principal'>



        <div className='contenedor-item'>
          <div className='contenedor-nombre'>
            <h1 className='subtitulo-proyecto'>Rick and Morty</h1>
          </div>
          <div className='contenedor-imagen-proyecto'>
            <img src={require("../slider/rickandmorty.jpg")} className="imagen" alt="img" />
          </div>
          <div className='contenedor-descripcion'>
            <p className='parrafo-proyecto'>Listado de los personajes de la serie.</p>
          </div>
          <div className='contenedor-links'>
            <a href="https://github.com/jhonatanfrank/rick-and-morty.git" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://rick-and-morty-sand-seven.vercel.app/" target="_blank" rel="noreferrer">
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className='contenedor-item'>
          <div className='contenedor-nombre'>
            <h1 className='subtitulo-proyecto'>Pokemón</h1>
          </div>
          <div className='contenedor-imagen'>
            <img src={require("../slider/pokemon.jpg")} className="imagen" alt="img" />
          </div>
          <div className='contenedor-descripcion'>
            <p className='parrafo-proyecto'>Listado de los personajes del anime.</p>
          </div>

          <div className='contenedor-links'>
            <a href="https://github.com/jhonatanfrank/pokemon.git" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://pokemon-ruddy-ten.vercel.app/" target="_blank" rel="noreferrer">
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className='contenedor-item'>
          <div className='contenedor-nombre'>
            <h1 className='subtitulo-proyecto'>Mundial de Qatar 2022</h1>
          </div>
          <div className='contenedor-imagen'>
            <img src={require("../slider/mundialqatar.jpg")} className="imagen" alt="img" />
          </div>
          <div className='contenedor-descripcion'>
            <p className='parrafo-proyecto'>Realiza tu propio pronostico del Mundial.</p>
          </div>

          <div className='contenedor-links'>
            <a href="https://github.com/jhonatanfrank/mundial-qatar2022.git" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://mundial-qatar2022-jhonatanfrank.vercel.app/" target="_blank" rel="noreferrer">
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
        <div className='contenedor-item'>
          <div className='contenedor-nombre'>
            <h1 className='subtitulo-proyecto'>Prediccion del Clima</h1>
          </div>
          <div className='contenedor-imagen'>
            <img src={require("../slider/clima.jpeg")} className="imagen" alt="img" />
          </div>
          <div className='contenedor-descripcion'>
            <p className='parrafo-proyecto'>Consumo de API de prediccion del clima.</p>
          </div>

          <div className='contenedor-links'>
            <a href="https://github.com/jhonatanfrank/openweather.git" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://openweather-jhonatanfrank.vercel.app/" target="_blank" rel="noreferrer">
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className='contenedor-item'>
          <div className='contenedor-nombre'>
            <h1 className='subtitulo-proyecto'>Clientes</h1>
          </div>
          <div className='contenedor-imagen'>
            <img src={require("../slider/usuarios.jpg")} className="imagen" alt="img" />
          </div>
          <div className='contenedor-descripcion'>
            <p className='parrafo-proyecto'>Consumo de una API de 10 clientes.</p>
          </div>
          <div className='contenedor-links'>
            <a href="https://github.com/jhonatanfrank/clients.git" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://clients-jhonatanfrank.vercel.app/" target="_blank" rel="noreferrer">
              <i className="fa-sharp fa-solid fa-eye"></i>
            </a>
          </div>
        </div>

        <div className='contenedor-item'>
          <div className='contenedor-nombre'>
            <h1 className='subtitulo-proyecto'>Cajero Automatico</h1>
          </div>
          <div className='contenedor-imagen'>
            <img src={require("../slider/cajeroautomatico.jpg")} className="imagen" alt="img" />
          </div>
          <div className='contenedor-descripcion'>
            <p className='parrafo-proyecto'>Una simulacion básica de un cajero automatico realizado en lenguaje de programacion PYTHON. (Habilitar los permisos de descarga del navegador)</p>
          </div>
          <div className='contenedor-links'>
            <a href="https://github.com/jhonatanfrank/cajero-automatico-python.git" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="./CajeroAutomatico.exe" target="_blank" rel="noreferrer">
              <i class="fa-solid fa-download"></i>
            </a>
          </div>
        </div>

        <div className='contenedor-item'>
          <div className='contenedor-nombre'>
            <h1 className='subtitulo-proyecto'>Alquiler de Vehiculos</h1>
          </div>
          <div className='contenedor-imagen'>
            <img src={require("../slider/alquilerdevehiculos.jpg")} className="imagen" alt="img" />
          </div>
          <div className='contenedor-descripcion'>
            <p className='parrafo-proyecto'>Backend de un CRUD de Alquiler de Vehiculos. (Spring Boot)</p>
          </div>
          <div className='contenedor-links'>
            <a href="https://github.com/jhonatanfrank/alquiler-de-vehiculos.git" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
