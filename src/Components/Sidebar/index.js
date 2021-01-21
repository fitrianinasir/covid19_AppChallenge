import React from 'react';
import logo from '../../assets/logo telkomsel.png'
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from '../Footer'

function index(props) {

    const cursor = {
        cursor: 'pointer'
      }
      const dropDownStyle = {
        fontSize: ".875rem",
        fontFamilySansSerif: "Open Sans, sans-serif",
        fontFamilyMonospace: `SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
        fontWeight: "500",
        color: "rgba(0,0,0,.5)",
        transition: ".3s ease",
        opacity: "1",
        marginLeft: "3.5rem",
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
              <div
                class="collapse navbar-collapse"
                id="sidenav-collapse-main"
              >
                <ul class="navbar-nav mt-5">
                  <li class="nav-item" style={cursor}>
                    <Link class="nav-link" to="/dashboard">
                      <i class="ni ni-tv-2 text-primary"></i>
                      <span class="nav-link-text text-dark">Dashboard</span>
                    </Link>
                  </li>

                  <li class="nav-item mt-2 mb-2" style={cursor}>
                    <div class="dropdown">
                      <i class="ni ni-collection text-orange position-fixed ml-4 mt-1"></i>
                      <span
                        class="dropdown-toggle nav-link-text text-dark" 
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={dropDownStyle}
                      >
                        Components
                      </span>
                      <div
                        class="dropdown-menu ml-5"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link class="dropdown-item" to="/nav-manager" style={cursor}>
                          Navbar Manager
                        </Link>
                        <Link class="dropdown-item" to="/nav-content" style={cursor}>
                          Navbar Content
                        </Link>
                        <Link class="dropdown-item" to="/home-content" style={cursor}>
                          Home Content
                        </Link>
                        <Link class="dropdown-item" to="/jumbotron" style={cursor}>
                          Jumbotron
                        </Link>
                        <Link class="dropdown-item" to="/footer" style={cursor}>
                          Footer
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" to="/clients">
                      <i class="ni ni-world-2 text-primary"></i>
                      <span class="nav-link-text text-dark">Clients</span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/partnership">
                      <i class="ni ni-single-02 text-yellow"></i>
                      <span class="nav-link-text text-dark">Partnership</span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/blogs">
                      <i class="ni ni-bullet-list-67 text-default"></i>
                      <span class="nav-link-text text-dark">Blogs</span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/area">
                      <i class="ni ni-square-pin text-primary"></i>
                      <span class="nav-link-text text-dark">Area</span>
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