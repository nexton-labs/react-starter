import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export const SideBar = ({ session, userInfo }) => {
  if (!session || !session.logged) return null;

  const userFullName = userInfo && userInfo.fullName;

  return (
    <div
      className="navbar-nav bg-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
      role="navigation"
    >
      <a className="d-flex welcome" href="#">
        <div className="sidebar-user">
          Welcome,
          <br /> {userFullName || "USER"}
        </div>
      </a>
    </div>
  );
};

SideBar.propTypes = {
  userInfo: PropTypes.object,
  session: PropTypes.object
};

const mapStatesToProps = state => ({
  userInfo: state.user.data,
  session: state.session
});

export default connect(mapStatesToProps)(withRouter(SideBar));
