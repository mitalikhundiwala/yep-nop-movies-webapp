import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { startLoginWithFacebook } from "../../actions/auth";
import "./login.page.scss";

interface IProps {
  startLoginWithFacebook: () => Promise<any>;
}

const LoginPage: FunctionComponent<IProps> = ({ startLoginWithFacebook }: IProps) => {
  return (
    <div className="page--login d-flex justify-content-center align-items-center">
      <div className="page--login__login-container pt-5 pb-5 pl-4 pr-4">
        <h1 className="page--login__login-title mb-4">Yep or Nop Movies</h1>
        <p>Let your friend's know your movie Ratings.</p>
        <button className="btn btn-primary btn-block" onClick={startLoginWithFacebook}>
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch): IProps => ({
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
