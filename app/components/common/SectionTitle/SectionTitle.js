import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <div className="col-md-6 mb-4">
      <h1 className="h3 mb-0">{title}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string
};

export default React.memo(SectionTitle);
