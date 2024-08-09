import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsContainer = (props) => {
  const [articles, setArticles] = useState([]);
  const [, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);
  // async componentDidMount() {
  //   updateNews();
  // }
  // handlePrevClick = async () => {
  //   setState({
  //     page: page - 1,
  //   });
  //   updateNews();
  // };
  // handleNextClick = async () => {
  //   setState({
  //     page: page + 1,
  //   });
  //   updateNews();
  // }
  return (
    <>
      <div className="container">
        <h3
          style={{
            marginTop: "80px",
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
            fontFamily: "Playfair Display",
          }}
        >
          Top News Today
        </h3>
        <p
          className="line"
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "30px",
            fontFamily: "Merriweather",
            fontSize: "12px",
          }}
        >
          {capitalizeFirstLetter(props.category)} News
        </p>
        {/* {loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={
            articles.length !== totalResults && articles.length < totalResults
          }
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          <div
            className="container"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              // gap: "30px",
            }}
          >
            {articles.map((element) => {
              // console.log(element);
              return (
                <div className="" key={element.url}>
                  <NewsItem
                    // title={element.title.slice(0, 60)}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    author={element.author ? element.author : "Unkown"}
                    date={element.publishedAt}
                    source={element.source.name}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>

        {/* {!loading && (
            <div className="container d-flex justify-content-between">
              <button
                disabled={page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={handlePrevClick}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="btn btn-dark"
                disabled={
                  page + 1 >
                  Math.ceil(totalResults / props.pageSize)
                }
                onClick={handleNextClick}
              >
                Next &rarr;
              </button>
            </div>
          )} */}
      </div>
    </>
  );
};
NewsContainer.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

NewsContainer.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default NewsContainer;
