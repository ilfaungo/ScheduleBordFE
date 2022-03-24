import React, { useState } from 'react';
import { Button, Modal,OverlayTrigger,Tooltip } from 'react-bootstrap';
import { FaPencilRuler } from 'react-icons/fa';
import Form from 'react-bootstrap/Form'

const ModalEditTask = (props) => {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [state, setState] = React.useState({
      name: "",
      task: "",
      note:""
    })
    const handleSubmit = () =>{
      alert("daje")
  }

  function handleChange(evt) {
    console.log("new value", evt.target.value);
  }
  
    return (
      <>
   
        <Button size="sm" onClick={handleShow} tool>
        <FaPencilRuler></FaPencilRuler>
        </Button>
       
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome assegantario</Form.Label>
                            <Form.Control type="text" placeholder="nome" name="name" value={props.row.name}  onChange={handleChange}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="task">
                            <Form.Label>Task</Form.Label>
                            <Form.Control type="text" placeholder="task"  name="task"  value={props.row.task} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="note">
                            <Form.Label>Note</Form.Label>
                            <Form.Control type="text" placeholder="note" name="note"  value={props.row.note} onChange={handleChange}/>
                        </Form.Group>

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
  
 export default ModalEditTask;