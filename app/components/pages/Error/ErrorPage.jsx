import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import * as statusActions from "../../../actions/statusActions";
import { Alert, Button } from "reactstrap";
import "./ErrorPage.scss";

export class ErrorPage extends React.PureComponent {
  static propTypes = {
    statusActions: PropTypes.object
  };

  handleResetStatus = () => {
    this.props.statusActions.resetStatus();
  };

  render() {
    return (
      <div>
        <Alert color="danger light">
          <h4 className="alert-heading">
            <p>Oh, no! We ran into an issue.</p>
          </h4>
        </Alert>
        <div className="error-container">
          <p>
            A server error has occurred and we’re working to fix the problem!
          </p>
          <p>We will be up and running shortly.</p>
          <div>
            <Link to={`/`}>
              <Button
                color="primary"
                className="mr-sm-2"
                onClick={this.handleResetStatus}
              >
                Accept
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProperties(dispatch) {
  return {
    statusActions: bindActionCreators(statusActions, dispatch)
  };
}

export default connect(null, mapDispatchToProperties)(ErrorPage);
