import { useEffect, useState } from "react";
import { addNoteAction, updateNotes } from "../../actions/noteActions";
import { useDispatch, useSelector } from "react-redux";

const AddNote = () => {

    const dispatch=useDispatch()
    const [inputData, setInputData] = useState('');
    const [isContent, setIsContent] = useState('');
    const [id, setId] = useState("");

    const note = useSelector(state => state.note.note);
    
    useEffect(() => {
        if(note) {
            setInputData(note.title);
            setIsContent(note.content);
            setId(note.id);
        }
    }, [note])

    const onSubmitForm = (e) => {
        e.preventDefault()
        const obj = {
            title:inputData,
            content:isContent
        }
        if(id){
            dispatch(updateNotes(id, obj))
            setId("");
        } else {
            dispatch(addNoteAction(obj))
        }
    setInputData('')
    setIsContent('')
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-10 col-sm-12 mx-auto">
                        <div className="add-note">
                            <form onSubmit={onSubmitForm}>
                                <div className="row">
                                    <input type="text" className="form-control" placeholder="Title" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                                    <textarea className="form-control" placeholder="Take a Note ..." rows='4' value={isContent} onChange={(e) => setIsContent(e.target.value)} ></textarea>
                                </div>
                                <div className="add-btn">
                                    <button type="submit" >Add Note</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddNote;