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
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Выйти
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              asyncFunc(saveChanges);
              handleClose();
            }}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
