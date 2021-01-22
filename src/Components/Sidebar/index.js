import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function index(props) {
  
  const cursor = {
    cursor: "pointer",
  };

  return (
    <div>
      
      <nav
        className="sidenav navbar navbar-vertical fixed-left  navbar-expand-xs navbar-light bg-white"
        id="sidenav-main"
      >
        <div className="scrollbar-inner pt-2">
          <div className="sidenav-header align-items-center mb-5">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="navbar-brand-img nav-img" alt="logo" />
              <p className="font-weight-bold">UNIVERSITAS <br/> HASANUDDIN </p>
            </Link>
          </div>
          <div className="navbar-inner ">
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
              <ul className="navbar-nav mt-5">
                <li className="nav-item" style={cursor}>
                  <Link className="nav-link" to="/dashboard">
                    <i className="ni ni-tv-2 text-primary"></i>
                    <span className="nav-link-text text-dark">Dashboard</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/symptoms">
                    <i className="ni ni-world-2 text-primary"></i>
                    <span className="nav-link-text text-dark">Symptoms</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/test">
                    <i className="ni ni-single-02 text-yellow"></i>
                    <span className="nav-link-text text-dark">Test Yourself</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/journal">
                    <i className="ni ni-bullet-list-67 text-default"></i>
                    <span className="nav-link-text text-dark">Journal</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* TOP NAV */}
      <div className="main-content" id="panel">
        <Navbar />
        {props.header}
        <Footer />
      </div>
    </div>
  );
}

export default index;
