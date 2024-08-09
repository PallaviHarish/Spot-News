import React from "react";
import github from "./github.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
const About = () => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "18rem;",
          textAlign: "center",
          fontFamily: "Fairplay Display",
        }}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            Spot News
          </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">About</h6>
          <p className="card-text">
            Welcome to Spot News, your go-to source for timely and reliable news
            coverage. We understand the importance of staying informed in
            today's fast-paced world, and we are dedicated to delivering the
            latest news with accuracy and objectivity.
          </p>
          <a href="https://github.com/">
            <img src={github} alt="" width={"50px"} />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="" width={"50px"} />
          </a>
          <a href="https://twitter.com/">
            <img src={twitter} alt="" width={"50px"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
