import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allNotes,deleteNotes} from "../../actions/noteActions";
import { UPDTAE_NOTE } from "../../actions/types";

const ListNote = () => {

    const dispatch = useDispatch();
    const noteList = useSelector(state => state.note.notes);
    useEffect(() => {
        dispatch(allNotes());
    }, []);

    const updateNotesAction = (val) => {
        dispatch({
            type: UPDTAE_NOTE,
            payload: val
        })
    }


    return (
        <>
            <div className="note-list min-vh-100">
                <div className="container">
                    <div className="row pt-4 pb-5">

                        {
                            noteList && noteList.map((val, id) => {
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={id}>
                                            <div className="note-list-content">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h3> {val.title} </h3>
                                                    <div className="icon">
                                                        <span className="me-2" onClick={()=> dispatch(deleteNotes(val.id))}><i className="fa-solid fa-trash text-red"></i></span>
                                                        <span onClick={
                                                            ()=>updateNotesAction(val)}><i className="fa-solid fa-pen-to-square text-blue"></i></span>
                                                    </div>
                                                </div>
                                                <hr />
                                                <p> {val.content} </p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default ListNote;