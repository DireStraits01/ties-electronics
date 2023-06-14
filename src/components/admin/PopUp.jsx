import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function PopUp({ children, icon, saveChanges }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const asyncFunc = async (func) => {
    await func();
  };

  return (
    <>
      <div onClick={handleShow}>{icon}</div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              asyncFunc(saveChanges);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
