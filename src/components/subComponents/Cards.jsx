import React from "react";
import Card from "./Card";
import niet from "../img/ojeras_Nitz.png";
import ojos_d from "../img/s_ojos_descartes.png";
import arrugas_k from "../img/arrugas_Kant.png";
import ojos_cab_aris from "../img/ojos_cab_aristoteles.png";
import marx from "../img/marx.jpg";
import platon from "../img/platon.jpg";
import tales_m from "../img/tales_mileto.jpg";
import sartre from "../img/sartre_m.png";
import pitag from "../img/pitagoras_m.png";
const names_1 = [
  {
    id: 1,
    name: "Friedrich Nietzsche",
    imag: niet,
    bibli:
      "Filósofo alemán, nacionalizado suizo. Su abuelo y su padre fueron pastores protestantes, por lo que se educó en un ambiente religioso. Tras estudiar filología clásica en las universidades de Bonn y Leipzig, a los veinticuatro años obtuvo la cátedra extraordinaria de la Universidad de Basilea; pocos años después, sin embargo, abandonó la docencia, decepcionado por el academicismo universitario.",
  },
  {
    id: 2,
    name: "Immanuel Kant",
    imag: arrugas_k,
    bibli:
      " Fue el primero y más importante representante del criticismo y precursor del idealismo alemán. Es considerado como uno de los pensadores más influyentes de la Europa moderna y de la filosofía universal. Además se trata del penúltimo pensador de la modernidad, anterior a la filosofía contemporánea que comienza en 1831 tras la muerte del pensador Hegel.",
  },
  {
    id: 3,
    name: "Rene Descartes",
    imag: ojos_d,
    bibli:
      "La influencia de René Descartes en las ciencias y matemáticas es igualmente evidente. Hizo contribuciones en física y óptica. Al igual que Galileo, se unió al sistema cosmológico copernicano. El sistema de coordenadas cartesianas recibió su nombre. Se le acredita como el padre de la geometría analítica, el puente entre el álgebra y la geometría, utilizado en el descubrimiento del cálculo infinitesimal.",
  },
];
const names_2 = [
  {
    id: 1,
    name: "Tales de Mileto",
    imag: tales_m,
    bibli:
      "En la antigüedad se le consideraba uno de los Siete Sabios de Grecia. No se conserva ningún texto suyo y es probable que no dejara ningún escrito a su muerte. Desde el siglo v a. C., se le atribuyen importantes aportaciones en el terreno de la filosofía, la matemática, la astronomía, la física, etc; así como un activo papel como legislador en su ciudad natal.",
  },
  {
    id: 2,
    name: "Jean-Paul Sartre",
    imag: sartre,
    bibli:
      "Fue el décimo escritor francés seleccionado como Premio Nobel de Literatura, en 1964, pero lo rechazó explicando en una carta2​ a la Academia Sueca que él tenía por regla rechazar todo reconocimiento o distinción y que los lazos entre el hombre y la cultura debían desarrollarse directamente, sin pasar por las instituciones establecidas del sistema.",
  },
  {
    id: 3,
    name: "Pitagoras",
    imag: pitag,
    bibli:
      "Fue un filósofo y matemático griego considerado el primer matemático puro. Contribuyó de manera significativa en el avance de la matemática helénica, la geometría y la aritmética, derivadas particularmente de las relaciones numéricas, y aplicadas por ejemplo a la teoría de pesos y medidas, a la teoría de la música o a la astronomía.",
  },
];
const names_3 = [
  {
    id: 1,
    name: "Platón",
    imag: platon,
    bibli:
      "Fue un filósofo griego seguidor de Sócratesn. y maestro de Aristóteles. En 387 a. C. fundó la Academia de Atenas,5​ institución que continuaría a lo largo de más de novecientos añosn. y a la que Aristóteles acudiría desde Estagira a estudiar filosofía alrededor del 367 a. C., compartiendo unos veinte años de amistad y trabajo con su maestro.",
  },
  {
    id: 2,
    name: "Aristoteles",
    imag: ojos_cab_aris,
    bibli:
      "Fue discípulo de Platón y de otros pensadores, como Eudoxo de Cnido, durante los veinte años que estuvo en la Academia de Atenas.5​ Poco después de la muerte de Platón, Aristóteles abandonó Atenas para ser el maestro de Alejandro Magno en el Reino de Macedonia durante casi 5 años.5​ En la última etapa de su vida fundó el Liceo en Atenas, donde enseñó hasta un año antes de su muerte.",
  },
  {
    id: 3,
    name: "Karl Marx",
    imag: marx,
    bibli:
      "En su vasta obra abarca diferentes campos del pensamiento en la filosofía, la historia, la ciencia política, la sociología y la economía, además incursionó en la práctica del periodismo y la política, proponiendo siempre en su pensamiento una unión entre teoría y práctica. Junto a Friedrich Engels, es el padre del socialismo científico, comunismo moderno, marxismo y materialismo histórico. Sus obras más conocidas son el Manifiesto del Partido Comunista (en coautoría con Engels) y El capital.",
  },
];

function Cards() {
  return (
    <div className="container mt-4">
      <div className="row">
        {names_1.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Card img={item.imag} name={item.name} bibli={item.bibli}></Card>
          </div>
        ))}
      </div>
      <div className="row">
        {names_2.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Card img={item.imag} name={item.name} bibli={item.bibli}></Card>
          </div>
        ))}
      </div>
      <div className="row">
        {names_3.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Card img={item.imag} name={item.name} bibli={item.bibli}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
