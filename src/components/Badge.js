import React, { Component } from "react";
import confLogo from "../images/badge-header.svg";
class Badge extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Diego <br /> Marquez{" "}
          </h1>
        </div>
        <div>
          <p>Frontend Engineer</p>
          <p>@diego_marquezEC</p>
        </div>
      </div>
    );
  }
}

export default Badge;
