import React from "react";
import PropTypes from "prop-types";
import SideBar from "./common/SideBar/SideBar";
import TopBar from "./common/TopBar/TopBar";
import Footer from "./common/footer/Footer";

const App = ({ auth, children }) => {
  return (
    <div id="wrapper">
      <SideBar auth={auth} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid" role="main">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

App.propTypes = {
  auth: PropTypes.object,
  children: PropTypes.object
};

export default React.memo(App);
