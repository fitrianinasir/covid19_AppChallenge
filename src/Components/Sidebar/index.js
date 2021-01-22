import React from "react";
import logo from "../../assets/logo telkomsel.png";
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
        class="sidenav navbar navbar-vertical fixed-left  navbar-expand-xs navbar-light bg-white"
        id="sidenav-main"
      >
        <div class="scrollbar-inner pt-2">
          <div class="sidenav-header align-items-center">
            <Link class="navbar-brand" to="/">
              <img src={logo} class="navbar-brand-img nav-img" alt="logo" />
            </Link>
          </div>
          <div class="navbar-inner ">
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
              <ul class="navbar-nav mt-5">
                <li class="nav-item" style={cursor}>
                  <Link class="nav-link" to="/dashboard">
                    <i class="ni ni-tv-2 text-primary"></i>
                    <span class="nav-link-text text-dark">Dashboard</span>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/clients">
                    <i class="ni ni-world-2 text-primary"></i>
                    <span class="nav-link-text text-dark">Symptoms</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/partnership">
                    <i class="ni ni-single-02 text-yellow"></i>
                    <span class="nav-link-text text-dark">Test Yourself</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/blogs">
                    <i class="ni ni-bullet-list-67 text-default"></i>
                    <span class="nav-link-text text-dark">Journal</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* TOP NAV */}
      <div class="main-content" id="panel">
        <Navbar />
        {props.header}
        {props.content}
        <Footer />
      </div>
    </div>
  );
}

export default index;
