import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as barsActions from "../../../actions/barsActions";

import Loading from "../../../components/common/loading/Loading";
import Header from "./components/Header/Header";
import Accessibility from "./components/Accessibility/Accessibility";
import Domain from "./components/Domain/Domain";
import AccessibilityStatement from "./components/AccessibilityStatement/AccessibilityStatement";
import EmbedWebWidget from "./components/EmbedWebWidget/EmbedWebWidget";

import Notification from "../../common/Notification/Notification";

import {
  SUCCESS_SAVE_MESSAGE,
  ERROR_SAVE_MESSAGE,
  NOTIFICATION_TYPES
} from "../../../resources/constants";

export const BarSettingsPage = ({ bar, barsActions }) => {
  useEffect(() => {
    barsActions.getBarByCurrentUser();
  }, [barsActions]);

  const handleSaveAccessibilityData = accessibility => {
    barsActions.updateBar(bar.data.id, accessibility);
  };

  const handleCreateDomain = domain => {
    barsActions.createBarDomain(bar.data.id, domain);
  };

  const handleDeleteDomain = domainId => {
    barsActions.deleteBarDomain(bar.data.id, domainId);
  };

  if (!bar || !bar.data || !bar.data.id || bar.isFetching) return <Loading />;

  const domains = bar && bar.data && bar.data.domains;

  const showNotification = bar.updated || bar.error;
  let message;
  let notificationType;

  if (showNotification) {
    message = bar.updated
      ? SUCCESS_SAVE_MESSAGE
      : bar.errorMessage || ERROR_SAVE_MESSAGE;
    notificationType = bar.updated
      ? NOTIFICATION_TYPES.SUCCESS
      : NOTIFICATION_TYPES.ERROR;
  }

  return (
    <React.Fragment>
      <Header />
      {showNotification && (
        <Notification message={message} type={notificationType} />
      )}
      <div className="row">
        <div className="col-md-6">
          <Accessibility
            data={bar.data}
            saveChanges={handleSaveAccessibilityData}
          />
          <Domain
            data={domains}
            createDomain={handleCreateDomain}
            deleteDomain={handleDeleteDomain}
          />
        </div>
        <div className="col-md-6 mb-4">
          <AccessibilityStatement
            data={bar.data}
            saveChanges={handleSaveAccessibilityData}
          />
        </div>
      </div>
      <EmbedWebWidget barId={bar.data.id} />
    </React.Fragment>
  );
};

BarSettingsPage.propTypes = {
  bar: PropTypes.object,
  barsActions: PropTypes.object
};

const mapStatesToProps = state => ({
  bar: state.bar
});

const mapDispatchToProps = dispatch => ({
  barsActions: bindActionCreators(barsActions, dispatch)
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(BarSettingsPage);
