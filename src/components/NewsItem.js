import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author, source } = props;
  function dateString(date) {
    return new Date(date).toGMTString();
  }
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          marginBottom: "15px",
          marginTop: "10px",
        }}
      >
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{
            left: "85%",
            zIndex: "1",
            fontFamily: "Roboto Slab",
            fontSize: "14px",
          }}
        >
          <span className="badge text-bg-danger">{source}</span>
        </span>

        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "170px" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "Playfair Display",
            }}
          >
            {title}
          </h5>
          <p className="card-text">
            <div
              className="text-body-secondary"
              style={{ fontSize: "10px", fontFamily: "Merriweather" }}
            >
              By {author ? author : "unknown"} on {dateString(date)}
            </div>
          </p>
          <p
            className="card-text"
            style={{ fontSize: "11px", fontFamily: "Merriweather" }}
          >
            {description}
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
            style={{ fontFamily: "Merriweather", fontSize: "12px" }}
          >
            Read article
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
