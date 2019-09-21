import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout d-flex justify-content-center align-items-center">
      <div className="box-layout__box pt-5 pb-5 pl-4 pr-4">
        <h1 className="box-layout__title mb-4">Yep or Nop Movies</h1>
        <p>Let your friend's know your movie Ratings.</p>
        <button className="btn btn-primary" onClick={startLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
