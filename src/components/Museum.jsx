import React from "react";

function Museum() {
  const urlParallax =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2Fparallax.mp4?alt=media&token=74becf2b-4036-4e8c-9167-b2d0f1e3a353";
  const urlDiaNoche =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2FNoche_1.mp4?alt=media&token=1fc1f4fc-e2fc-482a-ad99-61c1a8569779";
  const urlPolaroid =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2FEfec_polaroid_final.mp4?alt=media&token=4931f752-8edd-4ea4-bd24-7bbfba527860";
  const urlLogoAnimate =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2Flogo_animated.mp4?alt=media&token=6e9f32c9-0179-4c69-8175-8b10030dd0ef";
  const urlConstraste =
    "https://firebasestorage.googleapis.com/v0/b/labime.appspot.com/o/videos%2FContraste.mp4?alt=media&token=20f6eec2-24ef-4da3-8406-e16d298fc9fb";
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-center">La educacion</h1>
      <div className="container animate__animated animate__fadeInUp">
        <div className="row">
          <div className="col">
            <h1>urlParallax</h1>
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
        <div className="row">
          <div className="col">
            <video
              src={urlPolaroid}
              width="480px"
              preload="none"
              controls
            ></video>
          </div>
          <div className="col">
            <h1>Polariod</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Noche</h1>
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
        <div className="row">
          <div className="col">
            <video
              src={urlLogoAnimate}
              width="480px"
              preload="none"
              controls
            ></video>
          </div>
          <div className="col">
            <h1>Logo</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Contraste</h1>
          </div>
          <div className="col">
            <video
              src={urlConstraste}
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
