import React, { Fragment } from "react";
import { Alert } from "reactstrap";

const Home = () => {
  return (
    <Fragment>
      <h1>Welcome to Starter V2</h1>
      <Alert color="primary">Using React, Redux and Auth0.</Alert>
    </Fragment>
  );
};

export default React.memo(Home);
