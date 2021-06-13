import React from "react";

function Acordeon({ img_1, img_2, names }) {
  return (
    <div>
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id={"headingOne" + names}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapseOne" + names}
              aria-expanded="true"
              aria-controls={"collapseOne" + names}
            >
              La belleza
            </button>
          </h2>
          <div
            id={"collapseOne" + names}
            className="accordion-collapse collapse show"
            aria-labelledby={"headingOne" + names}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-center">
              <img
                src={img_1}
                alt="img"
                height="180px"
                className="rounded mx-auto d-block"
              />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id={"headingTwo" + names}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapseTwo" + names}
              aria-expanded="false"
              aria-controls={"collapseTwo" + names}
            >
              La belleza
            </button>
          </h2>
          <div
            id={"collapseTwo" + names}
            className="accordion-collapse collapse"
            aria-labelledby={"headingTwo" + names}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-center">
              <img
                src={img_2}
                alt="img"
                height="180px"
                className="rounded mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acordeon;
