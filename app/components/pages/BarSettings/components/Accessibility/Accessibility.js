import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const THEMES = {
  DARK: "Dark",
  LIGHT: "Light"
};

const Accessibility = ({ data, saveChanges }) => {
  const [accessibility, setAccessibilityValues] = useState({
    contactEmail: data ? data.contactEmail : "",
    accStatement: data ? data.accStatement : "",
    skipTo: data ? data.skipTo : "",
    accPortal: data ? data.accPortal : ""
  });

  const skipTo = useRef(null);

  useEffect(() => {
    skipTo.current.focus();
  }, []);

  const [theme, setTheme] = useState((data && data.theme) || THEMES.DARK);

  const updateField = e => {
    setAccessibilityValues({
      ...accessibility,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveChanges = () => {
    accessibility.theme = theme;
    saveChanges(accessibility);
  };

  const handleSelectTheme = e => {
    setTheme(e.target.value);
  };

  return (
    <div className="p-4 mb-4 bg-white shadow-sm">
      <form>
        <div className="form-group d-flex">
          <h3 className="mr-auto">Theme</h3>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="theme"
              id="themeDark"
              checked={theme === THEMES.DARK}
              onChange={handleSelectTheme}
              value={THEMES.DARK}
            />
            <label className="form-check-label mr-3 round" htmlFor="themeDark">
              Dark
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="theme"
              id="themeLight"
              checked={theme === THEMES.LIGHT}
              onChange={handleSelectTheme}
              value={THEMES.LIGHT}
            />
            <label className="form-check-label round" htmlFor="themeLight">
              Light
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="skipTo">Skip to</label>
          <input
            type="text"
            className="form-control"
            id="skipTo"
            name="skipTo"
            maxLength={100}
            value={accessibility.skipTo || ""}
            onChange={updateField}
            ref={skipTo}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactInfo">Contact Information</label>
          <input
            type="email"
            className="form-control"
            id="contactEmail"
            name="contactEmail"
            maxLength={200}
            value={accessibility.contactEmail || ""}
            onChange={updateField}
          />
        </div>
        <div className="form-group">
          <label htmlFor="a11yPortal">Accessibility Portal</label>
          <input
            type="text"
            className="form-control"
            id="accPortal"
            name="accPortal"
            maxLength={200}
            value={accessibility.accPortal || ""}
            onChange={updateField}
          />
        </div>
        <div className="d-flex align-items-end flex-column">
          <button
            type="button"
            className="btn btn-primary ml-auto btn-save"
            onClick={handleSaveChanges}
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

Accessibility.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    contactEmail: PropTypes.string,
    accStatement: PropTypes.string,
    skipTo: PropTypes.string,
    accPortal: PropTypes.string,
    theme: PropTypes.string
  }),
  saveChanges: PropTypes.func
};

export default Accessibility;
