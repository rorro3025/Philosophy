import img_grace_1 from "./img/grace_1.jpg";
import img_grace_2 from "./img/grace_2.jpg";
import img_christ from "./img/cx.jpg";
import aris_let from "./img/aristoteles_letras.png";
import snow from "./img/nieve_mod.png";
import text3d from "./img/Texto3D_2.png";

const History = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">En la antigua Grecia</h1>
      <div className="container animate__animated animate__fadeInUp">
        <div className="row">
          <div className="col">
            <h3 className="text-end">Inicios</h3>
            <p className="text-end">
              En la Antigua Grecia es donde ya por primera vez surgió la citada
              filosofía. Concretamente la misma apareció a principios del siglo
              VI a.C en la parte de Jonia, que se encuentra situada en Asia. Un
              momento y un lugar que, sin duda alguna, marcaron a esta rama del
              saber pues allí tuvieron lugar algunos acontecimientos
              fundamentales en la misma.
            </p>
            <p className="text-end">
              En concreto, entre esos puntos cúlmenes que hay que subrayar que
              nos encontraríamos con el establecimiento de cuatro periodos como
              serían la filosofía presocrática, los sofistas, la ática y la
              post-aristotélica.
            </p>
          </div>
          <div className="col text-center">
            <img
              src={img_grace_1}
              width="425px"
              alt="Grecia_1"
              className="border border-5 border-dark"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm text-center">
            <img
              src={img_grace_2}
              width="350px"
              alt="Grecia_1"
              className="border border-5 border-dark"
            />
          </div>
          <div className="col-sm text-start">
            <h3 className="text-start">Filosofia antigua</h3>
            <p className="text-start">
              Comprende la filosofía griega (presocrática y helenística) y la
              filosofía romana. Duró más de 1100 años, alrededor desde el año
              600 a. C. (con Tales de Mileto) hasta el siglo VI d.C., cuando los
              últimos neoplatónicos estaban activos. Sus principales ubicaciones
              fueron la antigua Grecia y el Imperio Romano.
            </p>
            <p className="text-start">
              En concreto lo que determinó con aquella es que cada idea es
              inmutable y única y que los seres de lo que es el mundo sensible
              se caracterizan por ser imperfectos y deficientes. Cuestiones
              todas ellas que adquirieron gran valor entre la filosofía como
              también lo hizo su conocido mito de la caverna donde analiza en
              profundidad la diferencia entre realidad y conocimiento.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <h3 className="text-end">Edad media</h3>
            <p className="text-end">
              La filosofía medieval es la filosofía que se desarrolló en Europa
              y Oriente Medio durante lo que hoy se llama el Medioevo o la Edad
              Media, que se extiende aproximadamente desde la caída del Imperio
              Romano hasta el Renacimiento. La Stanford Encyclopedia of
              Philosophy describe la filosofía medieval como la "receta" de una
              combinación de "la filosofía pagana con la nueva religión
              cristiana" y "una variedad de aromas de la herencia intelectual
              judía e islámica" cocinada por unos 1300 años. Algunas de estas
              doctrinas fueron especialmente difíciles de combinar (como la
              encarnación y la trinidad), pero el esfuerzo por resolverlas fue
              el motor de gran parte de la filosofía medieval, y llevó a
              desarrollar conceptos, teorías y distinciones que heredaría toda
              la filosofía posterior.
            </p>
          </div>
          <div className="col-sm text-center">
            <img
              src={img_christ}
              height="325px"
              alt="Grecia_1"
              className="border border-5 border-dark"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <img
              src={aris_let}
              height="325px"
              alt="alter"
              className="border border-5 border-dark"
            />
          </div>
          <div className="col">
            <h3 className="text-start">Renacimiento</h3>
            <p className="text-start">
              La filosofía renacentista, o filosofía del Renacimiento, es la
              filosofía que se desarrolló principalmente entre los siglos XV y
              XVI, comenzando en Italia y avanzando hacia el resto de Europa.
            </p>

            <p className="text-start">
              En la filosofía política, las rivalidades entre los estados
              nacionales, sus crisis internas y el comienzo de la colonización
              europea de América renovaron el interés por problemas acerca de la
              naturaleza y moralidad del poder político, la unidad nacional, la
              seguridad interna, el poder del Estado y la justicia
              internacional. En este campo destacaron los trabajos de Nicolás
              Maquiavelo, Jean Bodin y Francisco de Vitoria; los tres campos de
              la filosofía que más atención y desarrollo recibieron fueron la
              filosofía política, el humanismo y la filosofía natural.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h3 className="text-end">Comtemporanea</h3>
            <p className="text-end">
              La filosofía contemporanea es el periodo actual de la historia de
              la fislosofia, se le llama por este nombre a la filosofia de
              autores que aun estan vivos Es el período que sigue a la filosofía
              moderna, y su inicio se suele fijar a finales del siglo XIX o
              principios del siglo XX.
            </p>
            <p className="text-end">
              El siglo XX se encarga de las agitaciones producidas por una serie
              de conflictos en el discurso filosófico sobre las bases del
              conocimiento, con las certezas clásicas derrocadas, y con nuevos
              problemas sociales, económicos, científicos y lógicos. La
              filosofía del siglo XX se resolvió a intentar reformar y
              preservar, y a alterar o abolir, viejos sistemas de conocimiento.
              Figuras seminales incluyen a Søren Kierkegaard, Sigmund Freud,
              Friedrich Nietzsche, Ernst Mach y John Dewey.
            </p>
          </div>
          <div className="col text-center">
            <img
              src={snow}
              height="325px"
              alt="alter"
              className="border border-5 border-dark"
            />
          </div>
          <div className="row text-center mt-4">
            <div className="col"></div>
            <div className="col-sm">
              <img
                src={text3d}
                width="500px"
                className="border border-5 border-dark"
                alt="extructured"
              />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
