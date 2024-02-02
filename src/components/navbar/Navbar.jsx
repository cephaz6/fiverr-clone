import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
const Navbar = () => {
  // Navbar Menu Scroll effect Starts here
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  // Scroll effect ends here

  //  Active User Starts Here
  const currentUser = {
    id: 1,
    username: "Oselumese",
    isSeller: true,
  };
  // Active User Ends Here

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <span className="text">Cephaz</span>
            <span className="dot">.</span>
          </div>
        </Link>
        <div className="links">
          <Link className="link" to="">
            Cephaz Business
          </Link>
          <Link className="link" to="">
            Explore
          </Link>
          <Link className="link" to="">
            English
          </Link>
          <Link className="link" to="">
            Sign In
          </Link>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://media.licdn.com/dms/image/D4D03AQG0huJRM1SAgw/profile-displayphoto-shrink_800_800/0/1687422439969?e=2147483647&v=beta&t=aiEyVdskUcR8eBv0CWWYqAb1_o2s67xUL70mG4dnnso"
                alt=""
              />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/gigs/" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link to="/logout" className="link">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/">
              Software Development
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
            <Link className="link" to="/">
              Project Design
            </Link>
            <Link className="link" to="/">
              Video Animation
            </Link>
            <Link className="link" to="/">
              DevOps & Pipelines
            </Link>
            <Link className="link" to="/">
              Project Management
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              Gaming
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
