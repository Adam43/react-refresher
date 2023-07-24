import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
        if (setModalIsOpen) {
            console.log("Modal is open!")
        } else {
            console.log(null)
        }
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }
    return (
          <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
            { modalIsOpen ? <Backdrop onClick={closeModalHandler}/> : null }
          </div>
    )
}

export default Todo;

