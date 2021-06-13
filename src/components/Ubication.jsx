import React from "react";
import neon from "./img/neon_m.png";
function Ubication() {
  return (
    <div className="container bg-light mt-5">
      <h1 className="text-center">El origen</h1>
      <div className="container animate__animated animate__fadeInUp">
        <p className="text-center">
          En esta sección, se encuentra el mapa de una de las ubicaciones que es
          considerada el origen de la fisolofia, la cual es Atenas, Grecia
        </p>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col">
            <div className="container text-center bg-light">
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6433654.638142486!2d19.99061997534528!3d38.06029762134585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b4ac711716c63%3A0x363a1775dc9a2d1d!2sGrecia!5e0!3m2!1ses-419!2smx!4v1623279632263!5m2!1ses-419!2smx"
                width="65%"
                height="400px"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col text-center">
            <p className="text-center">
              Claro que esta no fue la unica parte del mundo en tener presencia
              en la fisolofia, algunos lugares mas:
            </p>
            <ul className="text-start">
              <li>China</li>
              <li>India</li>
              <li>Egipto</li>
              <li>Italia</li>
              <li>Francia</li>
              <li>Alemania</li>
            </ul>
            <p>
              Puedes exporar en el mapa para conocer las diferentes ubicaciones.
            </p>
            <img src={neon} alt="neon" width="50%" />
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Ubication;
