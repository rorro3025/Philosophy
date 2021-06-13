//import './Inicio.css'
import img_test1 from "./img/grace_3.jpg";
import Carusel from "./subComponents/Carusel";
const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>¿Qué es la filosofía?</h1>
      <div className="container animate__animated animate__fadeInUp">
        <p>
          La filosofía (del griego antiguo φιλοσοφία ‘amor a la sabiduría’
          derivado de φιλεῖν [fileîn] ‘amar’ y σοφία [sofía] ‘sabiduría’)​ es
          una disciplina académica y un conjunto de reflexiones y conocimientos
          de carácter trascendental que, en un sentido general, estudia la
          esencia, las causas primeras y los fines últimos de las cosas.​ Trata
          de responder a una variedad de problemas fundamentales acerca de
          cuestiones como la existencia y el ser (ontología y metafísica), el
          conocimiento (epistemología y gnoseología), la verdad (lógica), la
          moral (ética), la belleza (estética), el valor (axiología), la mente
          (filosofía de la mente), el lenguaje (filosofía del lenguaje) y la
          religión (filosofía de la religión). A lo largo de la historia, muchas
          otras disciplinas han surgido de la filosofía, por lo que es
          considerada la base de todas las ciencias modernas por muchos
          autores.​ El término probablemente fue acuñado por Pitágoras.
        </p>
        <div className="text-center mb-3">
          <img src={img_test1} height="200px" className="rounded" alt="GHOST" />
        </div>
        <h2>¿Quién es el filosofo?</h2>
        <p>
          El filósofo, por su parte, es un individuo que busca el saber por el
          saber mismo, sin un fin pragmático. Se mueve por la curiosidad e
          indaga acerca de los últimos fundamentos de la realidad. Más allá del
          desarrollo de la filosofía como disciplina, el acto de filosofar es
          intrínseco a la condición humana. No es un saber concreto, sino una
          actitud natural del hombre en relación al universo y a su propio ser.
        </p>
        <Carusel />
      </div>
    </div>
  );
};

export default Home;
