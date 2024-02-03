import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ gigProp }) => {
  return (
    <Link to="/gig/324">
      <div className="gigCard">
        <img src={gigProp.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={gigProp.pp} alt="" />
            <span>{gigProp.username}</span>
          </div>
          <p>{gigProp.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{gigProp.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>StARTING AT</span>
            <h2>${gigProp.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
