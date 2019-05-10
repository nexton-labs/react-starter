import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

class MyModal extends React.PureComponent {
  static propTypes = {
    okButtonLabel: PropTypes.string.isRequired,
    cancelButtonLabel: PropTypes.string.isRequired,
    children: PropTypes.any,
    isOpen: PropTypes.bool.isRequired,
    okCallback: PropTypes.func.isRequired,
    cancelCallback: PropTypes.func.isRequired,
    modalTitle: PropTypes.string.isRequired
  };

  render() {
    const {
      isOpen,
      cancelCallback,
      modalTitle,
      children,
      okCallback,
      okButtonLabel,
      cancelButtonLabel
    } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={cancelCallback}>
        <ModalHeader toggle={cancelCallback}>{modalTitle}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={okCallback}>
            {okButtonLabel}
          </Button>{" "}
          <Button color="secondary" onClick={cancelCallback}>
            {cancelButtonLabel}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default MyModal;
