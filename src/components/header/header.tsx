import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout, logout } from "../../actions/auth";

interface IProps {
  startLogout: () => Promise<void>;
}

export const Header: FunctionComponent<IProps> = ({ startLogout }) => (
  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Yep Nop Movies
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <div className="navbar-nav mr-auto">
          <a className="nav-item nav-link active" href="/">
            Dashboard
          </a>
        </div>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#" onClick={startLogout}>
            Logout
          </a>
        </div>
      </div>
    </nav>
  </header>
);

const mapDispatchToProps = (dispatch): IProps => ({
  startLogout: () => {
    return dispatch(startLogout());
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
