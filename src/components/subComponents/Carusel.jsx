import React from "react";

import rain_1 from "../img/lluvia_1.png"; //1
import rain_2 from "../img/lluvia_2.png"; //2
import thunder_1 from "../img/rayos_1.png"; //3
import thunder_2 from "../img/rayos_2.png"; //4
import cloudy from "../img/niebla.png"; //5
import nitz from "../img/Nitz.jpg"; //6
import kant from "../img/kant.jpg"; //7
import descartes from "../img/Descartes.jpg"; //8
import aris from "../img/aristoteles.jpg"; //9
import aris_or from "../img/aristoteles_letras_o.jpg"; //10
import jesus from "../img/s_cabello_jisus.png"; //11
import tales_reflect from "../img/tales_mileto_m.png"; //12
import sartre from "../img/sartre_o.jpg"; //13
import pitag from "../img/pitagoras.jpg"; //14
import marxMod from "../img/marx_modified.jpg.png"; //15
import platon_uni from "../img/platon_universo.png"; //16
import rainbow from "../img/arcoiris.png"; //17
import snow from "../img/nieve.jpg"; //18
/* originales de textos
import wood_o from '..img/madera_1.jpg'
import neon_o from '../img/neon_o.jpg'*/

function Carusel() {
  const pictures = [
    { id: 1, sr: cloudy },
    { id: 2, sr: rain_2 },
    { id: 3, sr: rain_1 },
    { id: 4, sr: thunder_1 },
    { id: 17, sr: rainbow },
    { id: 5, sr: thunder_2 },
    { id: 10, sr: aris },
    { id: 7, sr: kant },
    { id: 8, sr: descartes },
    { id: 12, sr: tales_reflect },
    { id: 13, sr: sartre },
    { id: 9, sr: aris_or },
    { id: 11, sr: jesus },
    { id: 6, sr: nitz },
    { id: 14, sr: pitag },
    { id: 15, sr: marxMod },
    { id: 16, sr: platon_uni },
    { id: 18, sr: snow },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {pictures.map((item) => (
                <div
                  className={
                    item.id === 1 ? "carousel-item active" : "carousel-item"
                  }
                  key={item.id}
                >
                  <img
                    src={item.sr}
                    className="d-block w-100 border border-5 border-dark"
                    alt="..."
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default Carusel;
