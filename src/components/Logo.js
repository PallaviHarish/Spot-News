import React, { Component } from "react";
import logo from "./icon.png";
export class Logo extends Component {
  render() {
    return (
      <img
        src={logo}
        alt="logo"
        width="50"
        height="50"
        style={{ cursor: "auto", marginRight: "10px" }}
      />
    );
  }
}

export default Logo;
