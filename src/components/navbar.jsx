import React from "react";

export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          RENU Cart
          {props.totalCounters > 0 ? (
            <span className="badge bg-primary m-2">{props.totalCounters}</span>
          ) : (
            ""
          )}
          {/* <span className="badge bg-primary m-2">{props.totalCounters}</span> */}
        </a>
      </div>
    </nav>
  );
};
