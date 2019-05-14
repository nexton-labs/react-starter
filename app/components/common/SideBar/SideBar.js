import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../../resources/constants";

export const SideBar = ({ auth, session, userInfo }) => {
  if (!session || !session.logged) return null;

  const userFullName = userInfo && userInfo.fullName;

  const handleLogOut = () => {
    auth.logout();
  };

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
      <ul>
        <li className="nav-item active" tabIndex="4">
          <a className="nav-link" onClick={handleLogOut}>
            <FontAwesomeIcon
              className="fas"
              icon={faPowerOff}
              color={COLORS.GREY}
            />
            <span> Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  auth: PropTypes.object,
  userInfo: PropTypes.object,
  session: PropTypes.object
};

const mapStatesToProps = state => ({
  userInfo: state.user.data,
  session: state.session
});

export default connect(mapStatesToProps)(withRouter(SideBar));
