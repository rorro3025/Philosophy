import React from "react";
import Acordeon from "./subComponents/Acordeon";
import teeth_1 from "./img/dientes_1.jpg";
import teeth_2 from "./img/dientes_2.png";
import freckles_1 from "./img/pecas_1.jpg";
import freckles_2 from "./img/pecas_2.png";
import liquid from "./img/texto_liquido.png";

function beauty() {
  const urlConstraste =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2FContraste.mp4?alt=media&token=20f6eec2-24ef-4da3-8406-e16d298fc9fb";
  const urlDiaNoche =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2FNoche_1.mp4?alt=media&token=1fc1f4fc-e2fc-482a-ad99-61c1a8569779";
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
              <h3>Belleza artificial</h3>
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
              <img
                src={liquid}
                alt="liquid"
                width="90%"
                className="mt-4 border border-dark border-3"
              />
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h3>Belleza natural</h3>
              <p>
                De acuerdo con la doctrina del materialismo dialéctico, la
                Naturaleza es la materia en toda la variedad de sus
                manifestaciones y formas de movimiento. La unidad de la
                Naturaleza (del mundo) estriba en su materialidad. La
                explicación científica de los fenómenos de la Naturaleza no
                tiene necesidad de ninguna causa exterior, espiritual, divina u
                otra análoga. “La concepción materialista del mundo se limita
                sencillamente a concebir la Naturaleza tal y como es, sin
                ninguna clase da aditamentos extraños” (Engels).{" "}
              </p>
            </div>
            <div className="col">
              <video
                src={urlDiaNoche}
                width="480px"
                preload="none"
                controls
              ></video>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <video
                src={urlConstraste}
                width="480px"
                preload="none"
                controls
              ></video>
            </div>
            <div className="col text-end">
              <p>
                Los idealistas declaran que la Naturaleza es un fenómeno de la
                conciencia. Kant, por ejemplo, estimaba que sólo el
                entendimiento humano introduce el orden y las leyes en el caos
                de fenómenos que nos circunda, transformándolo así en
                Naturaleza. Hegel consideraba la Naturaleza como el “otro ser”
                del espíritu; Mach, como un complejo de sensaciones del sujeto.
                En realidad, “la materia, la Naturaleza, el ser, son una
                realidad objetiva, existen fuera de nuestra conciencia e
                independientemente de ella” (Stalin).
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default beauty;
