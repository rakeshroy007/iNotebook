import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import "../css/NoteItem.css"

const NoteItem = (props) => {
    const { note, updateNote } = props;

    const context = useContext(noteContext)
    const { deleteNote } = context;

    return (
        <div className='col-md-3'>
            <div className="card my-1 round border border-primary custom-border-shadow">
                <div className="card-body ">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className='d-flex justify-content-between'>
                        <i className="fa-solid fa-trash mx-2" onClick={() => {
                            deleteNote(note._id); props.showAlert("Deleted Successfully.", "success")
                        }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
