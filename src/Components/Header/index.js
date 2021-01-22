import React from "react";
import Skeleton from "react-loading-skeleton";

function index(props) {
  return (
    <div>
      <div className="header bg-primary pb-6">
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4">
              <div className="col-lg-6 col-7">
                <h6 className="h2 text-white d-inline-block mb-0">Default</h6>
                <nav
                  aria-label="breadcrumb"
                  className="d-none d-md-inline-block ml-md-4"
                >
                  <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                    <li className="breadcrumb-item">
                      <a href="/">
                        <i className="fas fa-home"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Default
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                  {props.data !== undefined ? (
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-8">
                          <h6 className="card-title text-uppercase text-muted mb-4">
                            Confirmed
                          </h6>
                          <span className="h5 font-weight-bold mb-0">
                            {props.data && props.data.confirmed}
                          </span>
                        </div>
                        <div className="col-xl-4">
                          <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                            <i className="ni ni-chart-bar-32"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Skeleton height={100} />
                  )}
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                  {props.data !== undefined ? (
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-8">
                          <h6 className="card-title text-uppercase text-muted mb-4">
                            Recovered
                          </h6>
                          <span className="h5 font-weight-bold mb-0">
                            {props.data && props.data.recovered}
                          </span>
                        </div>
                        <div className="col-xl-4">
                          <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                            <i className="ni ni-fat-add"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Skeleton height={100} />
                  )}
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                  {props.data !== undefined ? (
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-8">
                          <h6 className="card-title text-uppercase text-muted mb-4">
                            Critical
                          </h6>
                          <span className="h5 font-weight-bold mb-0">
                            {props.data && props.data.critical}
                          </span>
                        </div>
                        <div className="col-xl-4">
                          <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                            <i className="ni ni-sound-wave"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Skeleton height={100} />
                  )}
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                  {props.data !== undefined ? (
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-8">
                          <h6 className="card-title text-uppercase text-muted mb-4">
                            Deaths
                          </h6>
                          <span className="h5 font-weight-bold mb-0">
                            {props.data && props.data.deaths}
                          </span>
                        </div>

                        <div className="col-xl-4">
                          <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                            <i className="ni ni-single-02"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Skeleton height={100} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col-xl-12">
            <div className="card-header bg-transparent">{props.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
