import { ALL_NOTES, UPDTAE_NOTE } from "../actions/types";

const initialState = {
    notes: [],
    note: null
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ALL_NOTES:
            return {
                ...state,
                notes: payload
            }
        case UPDTAE_NOTE:
            return{
                ...state,
                note: payload
            }
        default:
            return state;
    }
}