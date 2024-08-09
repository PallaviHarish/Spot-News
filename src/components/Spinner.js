import React from "react";
// import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <img src={spinner} alt="loading.." width="70px" height="70px" /> */}
      <div
        className="skeleton"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "space-around",
        }}
      >
        <div
          className="b1"
          style={{
            width: "286px",
            height: "400px",
            backgroundColor: " rgb(222, 221, 221)",
            borderRadius: "5px",
          }}
        ></div>
        <div
          className="b1"
          style={{
            width: "286px",
            height: "400px",
            backgroundColor: " rgb(222, 221, 221)",
            borderRadius: "5px",
          }}
        ></div>
        <div
          className="b1"
          style={{
            width: "286px",
            height: "400px",
            backgroundColor: " rgb(222, 221, 221)",
            borderRadius: "5px",
          }}
        ></div>
        <div
          className="b1"
          style={{
            width: "286px",
            height: "400px",
            backgroundColor: "rgb(222, 221, 221)",
            borderRadius: "5px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        {/* <div
            className="button-skeleton"
            style={{
              width: "70px",
              height: "37px",
              backgroundColor: "rgb(222, 221, 221)",
              borderRadius: "5px",
            }}
          ></div>
          <div
            className="button-skeleton"
            style={{
              width: "70px",
              height: "37px",
              backgroundColor: "rgb(222, 221, 221)",
              borderRadius: "5px",
            }}
          ></div> */}
      </div>
    </div>
  );
};

export default Spinner;
