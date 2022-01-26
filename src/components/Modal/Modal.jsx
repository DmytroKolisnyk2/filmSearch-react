import React, { Component } from "react";
import "./Modal.scss";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRef = document.querySelector("#root-modal");

export default class Modal extends Component {
  closeKeydownModal = (event) =>
    this.props.onClick && event.code === "Escape" && this.props.onClick();
  closeOverlayModal = (event) =>
    this.props.onClick && event.target === event.currentTarget && this.props.onClick();
  componentDidMount() {
    this.props.onClick && window.addEventListener("keydown", this.closeKeydownModal);
  }

  componentWillUnmount() {
    this.props.onClick && window.removeEventListener("keydown", this.closeKeydownModal);
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
  onClick: PropTypes.func,
};
