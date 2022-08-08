import axios from "axios"
import { ALL_NOTES, UPDTAE_NOTE } from "./types";

export const allNotes = () => async dispatch => {
    axios.get(" http://localhost:8000/notelist",
    {
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        dispatch({
            type: ALL_NOTES,
            payload: response.data
        })
    })
    .catch(err => {

    });
}

export const addNoteAction = (obj) => async dispatch =>{
    console.log(obj)
    axios.post("http://localhost:8000/notelist", obj,{
        
            headers: { 'Content-Type': 'application/json' }
        
    }).then(res=>{
        dispatch(allNotes())
    }).catch(err=>{
        console.log(err)
    })
}



export const deleteNotes =(id) => async dispatch =>{
    axios.delete(`http://localhost:8000/notelist/${id}`,{
        headers: { 'Content-Type': 'application/json' }
    }).then(res =>{
        dispatch(allNotes())
    }).catch(err=>{
        console.log(err)
    })
}


export const updateNotes =(id, val) => async dispatch =>{
    console.log(id, val);
    axios.put(`http://localhost:8000/notelist/${id}`, val, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res =>{
        dispatch(allNotes())
        // dispatch({
        //     type: UPDTAE_NOTE,
        //     payload: val
        // })
    }).catch(err=>{
        console.log(err)
    })
}


