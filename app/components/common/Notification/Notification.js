import React from "react";
import PropTypes from "prop-types";

import { Alert } from "reactstrap";

const Notification = ({ type, message }) => {
  return <Alert color={type}>{message}</Alert>;
};

Notification.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};

export default React.memo(Notification);
