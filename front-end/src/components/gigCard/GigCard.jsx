import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ gigProp }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={gigProp.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={gigProp.pp} alt="" />
            <span>{gigProp.username}</span>
          </div>
          <p>{gigProp.desc}</p>
          <div className="star">
            <img src="../img/star.png" alt="" />
            <span>{gigProp.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="../img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {gigProp.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
