import React from "react";
import SocialBar from "./subComponents/socialBar";

function Footer() {
  return (
    <div className="copy-right">
      <div className="container">
        <p>
          © 2021 UNAM. Todos los derechos reservados | Rodrigo Hernández Olguín.
        </p>
       <SocialBar/>
      </div>
    </div>
  );
}

export default Footer;
