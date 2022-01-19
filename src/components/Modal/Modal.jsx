import React, { Component } from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRef = document.querySelector("#root-modal");

export default class Modal extends Component {
  closeKeydownModal = (event) => event.code === "Escape" && this.props.onClick();
  closeOverlayModal = (event) => event.target === event.currentTarget && this.props.onClick();
  componentDidMount() {
    window.addEventListener("keydown", this.closeKeydownModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeKeydownModal);
  }

  render() {
    return createPortal(
      <div onClick={this.closeOverlayModal} className="Overlay">
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRef
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
