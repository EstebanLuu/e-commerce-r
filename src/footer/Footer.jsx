import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h2>Sobre nosotros</h2>
            <ul>
              <li>Nuestros trabajadores</li>
              <li>Sucursales</li>
              <li>Redes</li>
              <li>Términos y condiciones</li>
              <li>Política de privacidad</li>
            </ul>
          </div>
          <div className="box">
            <h2>Cuidado del usuario</h2>
            <ul>
              <li>Ayuda</li>
              <li>Como comprar </li>
              <li>Seguimiento de compra </li>
              <li>Compra al por mayor</li>
              <li>Reembolsos</li>
            </ul>
          </div>
          <div className="box">
            <h2>Contacto</h2>
            <ul>
              <li>Argentina </li>
              <li>Email: Cuenta@reactecommerce.com</li>
              <li>Phone: +54 1234-5678</li>
            </ul>
          </div>
        </div>
        <div className="icon d_flex">
          <div className="img d_flex">
            <i className="fa-brands fa-google-play"></i>
            <span>Google Play</span>
          </div>
          <div className="img d_flex">
            <i className="fa-brands fa-app-store-ios"></i>
            <span>App Store</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
