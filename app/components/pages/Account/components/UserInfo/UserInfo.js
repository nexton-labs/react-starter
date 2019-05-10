import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const UserInfo = ({ data, saveInfo }) => {
  const [userInfo, setUserInfoValues] = useState({
    fullName: (data && data.fullName) || "",
    email: (data && data.email) || "",
    organization: (data && data.organization) || "",
    phoneNumber: (data && data.phoneNumber) || "",
    title: (data && data.title) || ""
  });
  const fullName = useRef(null);

  useEffect(() => {
    fullName.current.focus();
  }, []);

  const handleSaveInfo = () => {
    saveInfo(userInfo);
  };

  const updateField = e => {
    setUserInfoValues({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="col-md-8 p-4 mb-4 bg-white">
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            maxLength={200}
            placeholder="Enter your full name"
            value={userInfo.fullName}
            onChange={updateField}
            ref={fullName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            className="form-control"
            id="Email"
            value={userInfo.email}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="organization"
            name="organization"
            maxLength={200}
            placeholder="Enter your organization"
            value={userInfo.organization}
            onChange={updateField}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone # (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            maxLength={200}
            placeholder="Enter your phone"
            value={userInfo.phoneNumber}
            onChange={updateField}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            maxLength={200}
            placeholder="Enter your title"
            value={userInfo.title}
            onChange={updateField}
          />
        </div>
        <div className="d-flex align-items-end flex-column">
          <button
            className="btn btn-primary ml-auto btn-save"
            onClick={handleSaveInfo}
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

UserInfo.propTypes = {
  data: PropTypes.object,
  saveInfo: PropTypes.func
};

export default UserInfo;
