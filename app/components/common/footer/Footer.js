import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import "./Footer.css";

export const Footer = ({ session }) => {
  if (!session || !session.logged) return null;

  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; Nextonlabs 2019</span>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  session: PropTypes.object
};

const mapStatesToProps = state => ({
  session: state.session
});

export default connect(mapStatesToProps)(Footer);
