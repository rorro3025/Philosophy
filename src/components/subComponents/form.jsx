import React from "react";

function Form() {
  return (
    <div className="row">
      <div className="col-sm-1"></div>
      <div className="col">
        <form>
          <div className="row">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="floatingName"
                  className="form-control"
                  placeholder="Ejemplo name"
                />
                <label for="floatingName">Nombre</label>
              </div>
            </div>
            <div className="col-md">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  id="floatingInput"
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Correo electronico</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="floatingAuthor"
                  className="form-control"
                  placeholder="Author"
                />
                <label for="floatingAuthor">
                  Autor del que quieras que habelemos
                </label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="floatingTheme"
                  className="form-control"
                  placeholder="Tematica"
                />
                <label for="floatingTheme">
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
                  id="floatingInsti"
                  className="form-control"
                  placeholder="Author"
                />
                <label for="floatingInsti">Institución</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="floatingOcupation"
                  className="form-control"
                  placeholder="Author"
                />
                <label for="floatingOcupation">Ocupación</label>
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
