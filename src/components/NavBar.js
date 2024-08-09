import React from "react";

import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
        // data-bs-theme="dark"
        // style={{ backgroundColor: "#ffeded" }}
        style={{
          fontFamily: "Fairplay Display",
          // fontSize: "18px",
          // boxShadow: "0.5px 0.5px 0.5px 0.5px lightgrey",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <Logo /> */}
            <strong
              style={{ fontSize: "29px", fontFamily: "Fairplay Display" }}
            >
              Spot News
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav"
              style={{ marginLeft: "auto", marginRight: "15px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <>Home</>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  <>Business</>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">
                  <>Entertainment</>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">
                  <>Health</>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">
                  <>Science</>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">
                  <>Sports</>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">
                  <>Technology</>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  <>About</>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
