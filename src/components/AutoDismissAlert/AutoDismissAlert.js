import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import "./AutoDismissAlert.scss";

const AutoDismissAlert = ({ variant, heading }) => {
  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  useEffect(() => setTimeout(handleClose, 2500), []);

  return (
    <Alert dismissible show={show} variant={variant} onClose={handleClose}>
      <div className="container">
        <Alert.Heading>{heading}</Alert.Heading>
      </div>
    </Alert>
  );
};

export default AutoDismissAlert;
