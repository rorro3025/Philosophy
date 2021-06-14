import React, { useState } from "react";
import { firestore} from "../../fsconfig";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [author, setAuthor] = useState("");
  const [theme, setTheme] = useState("");
  const [institution, setInstitution] = useState("");
  const [ocupation, setOcupation] = useState("");
  
  const sendInfo = async (e) => {
    e.preventDefault();
    let msg = {
      Nombre: name,
      Email: email ? email : "no se registro email",
      Peticion: {
        Autor: author ? author : "No se regitro autor",
        Tema: theme ? theme : "No se regitro tema",
      },
      Insitucion: institution ? institution : "No se registro institución",
      Ocupacion: ocupation ? ocupation : "No se registro ocupación",
    };
    try {
      await firestore
        .collection("Peticiones")
        .add(msg)
        .then(alert("Gracias por el aporte"));
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="row">
      <div className="col-sm-1"></div>
      <div className="col">
        <form onSubmit={sendInfo}>
          <div className="row">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="floatingName"
                  className="form-control"
                  placeholder="Ejemplo name"
                  required
                />
                <label htmlFor="floatingName">Nombre</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="floatingInput"
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Correo electronico</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                  id="floatingAuthor"
                  className="form-control"
                  placeholder="Author"
                />
                <label htmlFor="floatingAuthor">
                  Autor del que quieras que habelemos
                </label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => {
                    setTheme(e.target.value);
                  }}
                  id="floatingTheme"
                  className="form-control"
                  placeholder="Tematica"
                />
                <label htmlFor="floatingTheme">
                  Tema del que quieras que hablemos
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => {
                    setInstitution(e.target.value);
                  }}
                  id="floatingInsti"
                  className="form-control"
                  placeholder="Author"
                />
                <label htmlFor="floatingInsti">Institución</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => {
                    setOcupation(e.target.value);
                  }}
                  id="floatingOcupation"
                  className="form-control"
                  placeholder="Author"
                />
                <label htmlFor="floatingOcupation">Ocupación</label>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2">
            <input
              type="submit"
              className="btn btn-primary"
              value="Enviar respuestas"
            />
          </div>
        </form>
      </div>
      <div className="col-sm-1"></div>
    </div>
  );
}

export default Form;
