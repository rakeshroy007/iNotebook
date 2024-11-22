import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import '../css/Addnote.css'
import "../css/AddNoteHeading.css"


const AddNote = (props) => {

    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Added Successfully.", "success")

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-3' >
            <div class="heading-bar">
                <h2 class="heading-title">Add a Note</h2>
                <p class="heading-subtitle">Organize your thoughts and tasks efficiently</p>
            </div>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                </div>
                <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-addnote" onClick={handleClick}>Add Note</button>          {/* 👉 Add this disable condition #68 */}
            </form>
        </div>
    )
}

export default AddNote
