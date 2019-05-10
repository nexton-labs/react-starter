import React from "react";

const Header = () => {
  return (
    <div className="row d-flex">
      <div className="col-md-6 mb-4">
        <h1 className="h3 mb-0">Bar Settings</h1>
      </div>
      <div className="mb-4 ml-auto">
        <a href="#" className="btn btn-header shadow-sm">
          Best Practices
        </a>
        <a href="#" className="btn btn-header shadow-sm ml-3">
          A11y Portal
        </a>
      </div>
    </div>
  );
};

export default React.memo(Header);
