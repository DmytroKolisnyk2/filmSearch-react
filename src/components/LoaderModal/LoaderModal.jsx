import React from "react";
import Modal from "../Modal/Modal";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

const LoaderModal = () => {
  return (
    <>
      <Modal>
        <SpinnerLoader />
      </Modal>
    </>
  );
};

export default LoaderModal;
