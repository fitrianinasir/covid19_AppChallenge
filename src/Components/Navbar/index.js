import React from "react";

function index(props) {
  function requestLogout() {}
  return (
    <div>
      <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav align-items-center ml-auto ml-md-0 administrator-body w-100">
              <li class="nav-item d-xl-none">
                <div
                  class="pr-3 sidenav-toggler sidenav-toggler-dark"
                  data-action="sidenav-pin"
                  data-target="#sidenav-main"
                >
                  <div class="sidenav-toggler-inner">
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown w-100">
                <a
                  class="nav-link pr-0 administrator"
                  href="/"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="media align-items-center mr-3">
                    <span class="avatar avatar-sm rounded-circle">
                      <i class="fas fa-user"></i>
                    </span>
                    <div class="media-body  ml-2  d-none d-lg-block">
                      <span class="mb-0 text-sm font-weight-bold text-light">
                        Administrator
                      </span>
                    </div>
                  </div>
                </a>
                <div class="dropdown-menu  dropdown-menu-right ">
                  <a href="#!" class="dropdown-item" onClick={requestLogout}>
                    <i class="ni ni-user-run"></i>
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
