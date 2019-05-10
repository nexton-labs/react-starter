import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import * as userActions from "../../../actions/userActions";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Loading from "../../../components/common/loading/Loading";
import UserInfo from "./components/UserInfo/UserInfo";

import Notification from "../../common/Notification/Notification";

import {
  SUCCESS_SAVE_MESSAGE,
  ERROR_SAVE_MESSAGE,
  NOTIFICATION_TYPES
} from "../../../resources/constants";

export const AccountPage = ({ user, userActions }) => {
  useEffect(() => {
    userActions.getUserInfo();
  }, [userActions]);

  const handleSaveUserInfo = user => {
    userActions.updateUserInfo(user);
  };

  if (!user || !user.data || user.isFetching || user.isUpdating)
    return <Loading />;

  const showNotification = user.updated || user.error;
  let message;
  let notificationType;

  if (showNotification) {
    message = user.updated
      ? SUCCESS_SAVE_MESSAGE
      : user.errorMessage || ERROR_SAVE_MESSAGE;
    notificationType = user.updated
      ? NOTIFICATION_TYPES.SUCCESS
      : NOTIFICATION_TYPES.ERROR;
  }

  return (
    <div className="container-fluid" role="main">
      <div className="row d-flex">
        <SectionTitle title="My Account" />
      </div>
      {showNotification && (
        <div className="col-md-8">
          <Notification message={message} type={notificationType} />
        </div>
      )}
      <div className="row">
        <UserInfo data={user.data} saveInfo={handleSaveUserInfo} />
      </div>
    </div>
  );
};

AccountPage.propTypes = {
  user: PropTypes.object,
  userActions: PropTypes.object
};

const mapStatesToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(AccountPage);
