import React from "react";
import Acordeon from "./subComponents/Acordeon";
import teeth_1 from "./img/dientes_1.jpg";
import teeth_2 from "./img/dientes_2.png";
import freckles_1 from "./img/pecas_1.jpg";
import freckles_2 from "./img/pecas_2.png";
import liquid from "./img/texto_liquido.png";

function beauty() {
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">La belleza</h1>
        <div className="container animate__animated animate__fadeInUp">
          <div className="row mt-2">
            <div className="col text-center">
              <Acordeon img_1={teeth_1} img_2={teeth_2} names="Dientes" />
            </div>
            <div className="col text-start">
              <h3>Belleza natural y artificial</h3>
              <p>
                Hoy en día es también común hablar de belleza natural para
                referirse a aquella que se ostenta naturalmente, sin que se haya
                tenido la necesidad de pasar por el quirófano para ajustar
                ningún desperfecto. En este sentido, se dice que tener belleza
                de traza es tener belleza física natural. Lo opuesto es la
                belleza artificial, en auge actualmente, que implica el empleo
                de la cirugía estética para corregir o aumentar algunos aspectos
                de cuerpo para hacerlo más bello
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col text-end">
              <h3>Belleza en la filosofia</h3>
              El concepto de belleza, según la filosofía, ha evolucionado de
              diversas maneras. Platón consideraba la belleza, fundamentalmente,
              como un ideal. En este sentido, existe solo una belleza verdadera:
              la prototípica, la ejemplar, la que pertenece al mundo de lo ideal
              y que sirve de modelo al artista para sus creaciones. Según esto,
              la verdadera belleza, entonces, solo tiene lugar en el alma, y la
              única manera de acceder a ella es mediante la filosofía. Kant, por
              su parte, distinguía dos tipos de belleza: la libre, que se
              presentaba naturalmente y sin arreglos, y la belleza adherente,
              que está sujeta al juicio racional que espera encontrar en ella
              una serie de atributos según los cuales el objeto es considerado
              como bello.
            </div>
            <div className="col text-center">
              <Acordeon img_1={freckles_1} img_2={freckles_2} names="Pecas" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col text-center">
              <img src={liquid} alt="liquid" width="90%" className="mt-4 border border-dark border-3" />
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default beauty;
