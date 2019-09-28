import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: FunctionComponent<undefined> = () => (
  <div>
    404 - <Link to="/">Go Home</Link>!
  </div>
);

export default NotFoundPage;
