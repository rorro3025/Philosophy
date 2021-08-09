import React from "react";
import cromo from "./img/Cromo_filos.png";

function Museum() {
  const urlParallax =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2Fparallax.mp4?alt=media&token=74becf2b-4036-4e8c-9167-b2d0f1e3a353";
  const urlPolaroid =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2FEfec_polaroid_final.mp4?alt=media&token=4931f752-8edd-4ea4-bd24-7bbfba527860";
  const urlLogoAnimate =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2Flogo_animated.mp4?alt=media&token=6e9f32c9-0179-4c69-8175-8b10030dd0ef";

  return (
    <div className="container mt-5 ">
      <h1 className="text-center">La educación</h1>
      <div className="container animate__animated animate__fadeInUp">
        <div className="row mt-3">
          <div className="col text-start">
            <h3>Escuelas</h3>
            <p>
              Existen diversas corrientes dentro de la filosofia ya que cada
              filosofo ha creado su propio pensamiento, algunas de las
              corrientes se mencionan a continuación:
            </p>
            <ul>
              <li>Realismo</li>
              <li>Espectismo</li>
              <li>Relacionismo</li>
              <li>Empirismo</li>
              <li>Absurdismo</li>
            </ul>
          </div>
          <div className="col">
            <video
              src={urlParallax}
              width="480px"
              preload="none"
              controls
            ></video>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <video
              src={urlPolaroid}
              width="480px"
              preload="none"
              controls
            ></video>
          </div>
          <div className="col text-end">
            <h3>Museos</h3>
            <p>
              La Filosofía de la Educación no constituye un campo independiente,
              como una “reserva acotada” de conocimiento, sino que debe
              cultivarse en diálogo interdisciplinar con los demás saberes que
              se ocupan del estudio del ser humano y de la educación. En
              concreto, se sitúa en la intersección de la Antropología, la
              Filosofía de la Cultura y las Ciencias de la Educación cuando
              éstas tratan de comprender en plenitud al ser humano en cuanto
              educable, con vistas a iluminar lúcidamente la acción educativa
              [G. Amilburu y García, 2012].
            </p>
            <p>
              Como se menciona en las corrientes filosoficas. el conocimiento
              debe mantenerse y preservase, con esta idea podemos habla de los
              museos.
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-sm">
              <img src={cromo} alt="frase_cromo" width="500px" className="border border-4 border-secondary"/>
            </div>
            <div className="col">
            <video
              src={urlLogoAnimate}
              width="480px"
              preload="none"
              controls
            ></video>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Museum;
