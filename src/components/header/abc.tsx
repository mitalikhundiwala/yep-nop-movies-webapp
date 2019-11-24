import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Test = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
      </div>
    </div>
  </header>
);

export default connect(undefined, undefined)(Test);
