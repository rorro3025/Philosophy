import React from "react";

import logo2 from "./img/Unam_letras.png";
function Header() {
  return (
    <div className="bg-dark">
      <img src={logo2} alt="Logo UNAM" height="70px" id="logo" />
    </div>
  );
}

export default Header;
