import { RequestService } from "../../API";
import {SET_JOGS} from "../actions/jogs";
const requestService =  new RequestService();

const initialState = {
    jogs: []
};

export const jogs = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOGS:
            const { jogs } = action;
            return { ...state, jogs };
        default:
            return state
    }
};

const setJogs = (jogs) => ({
   type: SET_JOGS,
   jogs
});


export const getJogs = () => async (dispatch) => {
    const requestJogs = await requestService.get('/data/sync');
    const { jogs } = requestJogs;
    dispatch(setJogs(jogs))
};
