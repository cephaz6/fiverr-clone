import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the Perfect freelance service for your business</h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" name="" placeholder="Try, Web Development" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular</span>
            <button>Web Design</button>
            <button>App Development</button>
            <button>Product Design</button>
            <button>Animation</button>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Featured;
