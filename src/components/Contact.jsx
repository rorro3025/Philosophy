import React from "react";
import Form from "./subComponents/form";
import wood from "./img/madera_2.png";
const Contact = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Contáctanos</h1>
      <div className="container animate__animated animate__fadeInUp">
        <p>
          Si quieres saber mas acerca de este proyecto solo contesta el
          siguiente formulario.
        </p>
        <Form />
        <p>
          O si deseas contacto mas directo puedes mandar un
          <a href="mailto:rorro3025@gmail.com"> correo electronico</a>
        </p>
      </div>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col">
          <div className="container">
            <img
              src={wood}
              alt="cite"
              width="90%"
              className="border border-3 border-dark rounded-pill animate__heartBeat"
            />
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default Contact;
