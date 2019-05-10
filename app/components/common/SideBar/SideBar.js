import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faUser,
  faChartLine,
  faPowerOff
} from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../../resources/constants";

const NAV_ITEMS = {
  ROOT: "/",
  BAR: "/bar-settings",
  ACCOUNT: "/account",
  STATS: "/stats"
};

export const SideBar = ({ session, userInfo, location, auth }) => {
  if (!session || !session.logged) return null;

  const userFullName = userInfo && userInfo.fullName;

  const isActive = to => {
    const path = location && location.pathname;
    return path === to;
  };

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
        <li
          tabIndex="1"
          className={classnames("nav-item active", {
            selected: isActive(NAV_ITEMS.ACCOUNT)
          })}
        >
          <Link to="/account" className="nav-link">
            <FontAwesomeIcon icon={faUser} color={COLORS.GREY} />
            <span> My Account</span>
          </Link>
        </li>
        <li
          tabIndex="2"
          className={classnames("nav-item active", {
            selected: isActive(NAV_ITEMS.ROOT) || isActive(NAV_ITEMS.BAR)
          })}
        >
          <Link to="/bar-settings" className="nav-link">
            <FontAwesomeIcon icon={faCog} color={COLORS.GREY} />
            <span> Bar Settings</span>
          </Link>
        </li>
        <li
          tabIndex="3"
          className={classnames("nav-item active", {
            selected: isActive(NAV_ITEMS.STATS)
          })}
        >
          <Link to="/stats" className="nav-link">
            <FontAwesomeIcon icon={faChartLine} color={COLORS.GREY} />
            <span> Stats</span>
          </Link>
        </li>
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
  location: PropTypes.object,
  userInfo: PropTypes.object,
  session: PropTypes.object
};

const mapStatesToProps = state => ({
  userInfo: state.user.data,
  session: state.session
});

export default connect(mapStatesToProps)(withRouter(SideBar));
