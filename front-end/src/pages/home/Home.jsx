import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";

import { cards, projects } from "../../data";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

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
        <div className="container">
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
              className="video"
              data-thumb="https://foundation.tindaxtech.com/assets/img/tindax-preview.png"
              src="https://player.vimeo.com/external/556262618.sd.mp4?s=9174e33ba9ffbb33b8d65803d1de6acdee5d56b8&profile_id=164&oauth2_token_id=57447761"
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              <i>Cephaz</i> Oselumese
            </h1>
            <h1>Bringing technical solutions to you</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful worksoace
            </div>
            <button>Explore Cephaz. Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowScroll={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
