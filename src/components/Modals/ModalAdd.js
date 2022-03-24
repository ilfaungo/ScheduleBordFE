import React, { useState } from 'react';
import { Button, Modal, OverlayTrigger, Tooltip, DropdownButton, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const ModalAdd = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () =>{
        alert("daje")
    }
    return (
        <>
            <OverlayTrigger
                placement="bottom"
                overlay={<p><Tooltip id="button-tooltip-2">Edit..</Tooltip></p>}
            >
                <Button size="sm" onClick={handleShow} tool>
                    +
                </Button>
            </OverlayTrigger>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome assegantario</Form.Label>
                            <Form.Control type="text" placeholder="none" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="task">
                            <Form.Label>Task</Form.Label>
                            <Form.Control type="text" placeholder="task" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="note">
                            <Form.Label>Note</Form.Label>
                            <Form.Control type="text" placeholder="note" />
                        </Form.Group>
                        <InputGroup className="mb-3">
    <DropdownButton
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-label="Text input with dropdown button" />
  </InputGroup>
  

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAdd;