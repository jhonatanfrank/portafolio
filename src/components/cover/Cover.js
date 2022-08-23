import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
        <video className='video' src={coverVideo} autoPlay loop muted/>
        <h1>Frank Jhonatan Chancafe Miramira</h1>
        <p>Desarrollador | Diseñador | Creador de Contenido | Emprendedor</p>
    </div>
  );
};

export default Cover