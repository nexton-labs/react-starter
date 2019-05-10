import React from "react";
import Loading from "../../common/loading/Loading";

class Callback extends React.PureComponent {
  render() {
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white"
    };

    return <div style={style}>{<Loading />}</div>;
  }
}

export default Callback;
