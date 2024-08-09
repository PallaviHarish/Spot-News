import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsContainer from "./components/NewsContainer";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  // apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "1ef72c5d697542c0bf9ec958969d2155";
  // state = {
  //   progress: 0,
  // };
  // setProgress = (progress) => {
  //   this.setState({ progress: progress });
  // };
  const [progress, setProgress] = useState(0);
  return (
    <div style={{ fontFamily: "Playfair Display" }}>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          color="#dc3545"
          progress={progress}
          height={3}
          loaderSpeed={400}
          // onLoaderFinished={() => setProgress(0)}
        />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsContainer
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="home"
                  pageSize={4}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/business"
              element={
                <NewsContainer
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="business"
                  pageSize={4}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <NewsContainer
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="health"
                  pageSize={4}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <NewsContainer
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="science"
                  pageSize={4}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <NewsContainer
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="sports"
                  pageSize={4}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <NewsContainer
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="technology"
                  pageSize={4}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <NewsContainer
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={4}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
