import React from 'react'
import "../slider/Slider.css"

const Slider = () => {
  return (
    <div className='contenedor-slider'>
      <h1 className='titulo-proyecto'>Proyectos:</h1>
      <div className='contenedor-principal'>
        <a target="_blank" href="https://rick-and-morty-sand-seven.vercel.app/">
          <div className='contenedor-item'>
            <div className='contenedor-nombre'>
              <h1 className='subtitulo-proyecto'>Rick and Morty</h1>
            </div>
            <div className='contenedor-imagen-proyecto'>
              <img src={require("../slider/rickandmorty.jpg")} className="imagen" />
            </div>
            <div className='contenedor-descripcion'>
              <p className='parrafo-proyecto'>Listado de los personajes de la serie.</p>
            </div>
          </div>
        </a>
        <a target="_blank" href="https://pokemon-ruddy-ten.vercel.app/">
          <div className='contenedor-item'>
            <div className='contenedor-nombre'>
              <h1 className='subtitulo-proyecto'>Pokemón</h1>
            </div>
            <div className='contenedor-imagen'>
              <img src={require("../slider/pokemon.jpg")} className="imagen" />
            </div>
            <div className='contenedor-descripcion'>
              <p className='parrafo-proyecto'>Listado de los personajes del anime.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Slider
