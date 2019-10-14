import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout, logout } from "../../actions/auth";
import { IStore } from "../../store/configureStore";
import User from "../../models/user";

interface IProps {
  startLogout: () => Promise<void>;
  user: User
}

export const Header: FunctionComponent<IProps> = ({ startLogout, user }) => (
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
        <span className="navbar-text"><img src={user.photoURL} />{user.name}</span>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#" onClick={startLogout}>
            Logout
          </a>
        </div>
      </div>
    </nav>
  </header>
);

const mapDispatchToProps = (dispatch): Partial<IProps> => ({
  startLogout: () => {
    return dispatch(startLogout());
  }
});

const mapStateToProps = (state: IStore): Partial<IProps> => {
  console.log(state.auth.user);
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
