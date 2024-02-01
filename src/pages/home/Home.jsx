import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";

import { cards } from "../../data";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/catCard/CatCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="containter">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best of every budget
            </div>
            <p>
              Access top freelancers and professional business tools for any
              project
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get Certified
            </div>
            <p>Build your own branded marketplace of certified experts</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get into Our Enterprise
            </div>
            <p>
              Manage your freelance workforce and onboard additional talent with
              an end-to-end SaaS solution
            </p>
          </div>
          <div className="item">
            <video
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/e0f330e4c8d6e3bf843a3bd3164fa275-1706087048062/How%20Fiverr%20Works%20EN%20Subs%2016x9"
              controls
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
