import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../Actions";

function EditTask({ toDo_task }) {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(toDo_task.task);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (input) => setEdit(input);

    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(editTask({ id: toDo_task.id, edit: edit }));
        handleClose();
    };
    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        // input="frv"
                        type="text"
                        placeholder="tape"
                        onChange={(e) => handleChange(e.target.value)}
                        value={edit}
                        // this value can be "defaultvalue = toDo_task.task" to be allowed to
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask;
