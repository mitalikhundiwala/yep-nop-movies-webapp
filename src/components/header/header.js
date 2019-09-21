import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Yep Nop Movies
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav mr-auto">
          <a class="nav-item nav-link active" href="#">
            Dashboard
          </a>
        </div>
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#" onClick={startLogout}>
            Logout
          </a>
        </div>
      </div>
    </nav>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
