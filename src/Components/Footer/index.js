import React from "react";

function index(props) {
  return (
    <div>
      <footer className="footer pt-0">
        <div className="row align-items-center justify-content-lg-between">
          <div
            className="copyright text-center m-auto mt-2 text-muted"
            style={{ height: "1rem", lineHeight: "3rem" }}
          >
            &copy; 2021
            <a
              href="https://www.creative-tim.com"
              className="text-center font-weight-bold ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fitriani Nasir
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default index;
