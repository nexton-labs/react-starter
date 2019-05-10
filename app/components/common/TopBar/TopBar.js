import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

export const TopBar = ({ session }) => {
  if (!session || !session.logged) return null;

  return (
    <div className="navbar navbar-expand navbar-light bg-dark topbar mb-4 static-top shadow d-flex">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars text-white" />
      </button>
      <h2 className="ml-auto text-white">A11yBar</h2>
    </div>
  );
};

TopBar.propTypes = {
  session: PropTypes.object
};

const mapStatesToProps = state => ({
  session: state.session
});

export default connect(mapStatesToProps)(TopBar);
