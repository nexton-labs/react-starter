import React from "react";
import "./Loading.scss";

export default class Loading extends React.PureComponent {
  render() {
    return (
      <div className="lds-ring">
        <div />
        <div />
      </div>
    );
  }
}
