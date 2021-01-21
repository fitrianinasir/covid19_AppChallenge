import React from "react";

function index(props) {
  return (
    <div class="header bg-primary pb-6" style={{ marginBottom: "30%" }}>
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
              <nav
                aria-label="breadcrumb"
                class="d-none d-md-inline-block ml-md-4"
              >
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item">
                    <a href="/">
                      <i class="fas fa-home"></i>
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="/">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Default
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-4">
                        Total visitors
                      </h5>
                      <span class="h2 font-weight-bold mb-0">
                        4
                      </span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                        <i class="ni ni-chart-bar-32"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-4">
                        Total Blogs
                      </h5>
                      <span class="h2 font-weight-bold mb-0">
                        3
                      </span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                        <i class="ni ni-collection"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-4">
                        AVG Blog Visitors
                      </h5>
                      <span class="h2 font-weight-bold mb-0">
                        2
                      </span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                        <i class="ni ni-sound-wave"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-4">
                        Total Clients
                      </h5>
                      <span class="h2 font-weight-bold mb-0">
                          1
                      </span>
                    </div>

                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i class="ni ni-satisfied"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
