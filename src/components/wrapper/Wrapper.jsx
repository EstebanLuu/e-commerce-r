import React from "react";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Envio a todo el mundo",
      decs: "Ofrecemos envios economicos a todas partes del mundo",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Pago seguro",
      decs: "Ofrecemos seguridad a la hora de pagar nuestros productos",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Compra con confianza",
      decs: "Ofrecemos garantia para que el consumidor este 100% satisfecho con nuestro servicio",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "Soporte 24/7",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos de cualquier rango.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
