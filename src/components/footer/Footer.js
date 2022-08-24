import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="fondo">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div className="footer-info">
              <h1>Frank Jhonatan Chancafe Miramira</h1>
              <p>Vivo en Lima - Perú</p>
            </div>
            <div className="footer-contact">
              <h3>Contáctame</h3>
              <p>Comunicarse conmigo para cualquier trabajo</p>
            </div>
            <div className="design-by">Realizado por: Frank Jhonatan Chancafe Miramira</div>
            <div className="sns-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter linkedin"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook facebook"></i>
              </a>
            </div>
          </div>
          <div class="col-sm-6 texto">
            <hr></hr>
            <h1>Llena este formulario: </h1>
            <form action="https://formspree.io/f/mzbwzekq"
              method="POST">
              <div class="mb-3">
                <label for="nombre" class="form-label texto">Nombre:</label>
                <input type="text" name="nombre" class="form-control" id="nombre" placeholder="Ingrese su nombre" />
              </div>
              <div class="mb-3">
                <label for="correoelectronico" class="form-label texto">Dirección de correo electrónico:</label>
                <input type="email" name="correoelectronico" class="form-control" id="correoelectronico" placeholder="Ingrese su correo electronico" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label texto">Mensaje:</label>
                <textarea class="form-control" name="mensaje" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <button class="btn btn-danger" type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
