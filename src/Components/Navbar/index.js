import React from "react";

function index(props) {
  return (
    <div>
      <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center ml-auto ml-md-0 administrator-body w-100">
              <li className="nav-item d-xl-none">
                <div
                  className="pr-3 sidenav-toggler sidenav-toggler-dark"
                  data-action="sidenav-pin"
                  data-target="#sidenav-main"
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown w-100">
                <a
                  className="nav-link pr-0 administrator"
                  href="/"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="media align-items-center mr-3">
                    <span className="avatar avatar-sm rounded-circle">
                      <i className="fas fa-user"></i>
                    </span>
                    <div className="media-body  ml-2  d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold text-light">
                        Administrator
                      </span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu  dropdown-menu-right ">
                  <a href="#!" className="dropdown-item">
                    <i className="ni ni-user-run"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default index;
