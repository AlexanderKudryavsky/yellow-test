import { JOGS_BY_DATES, SET_JOGS } from '../actions/jogs';
import {RequestService} from '../../API';

const requestService = new RequestService();

const initialState = {
    jogs: [],
    jogsSnapShot: []
};

export const jogs = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOGS:
            const {jogs} = action;
            return {...state, jogs, jogsSnapShot: jogs};
        case JOGS_BY_DATES:
            const {dateFrom, dateTo} = action;
            return {
                ...state, jogs: state.jogsSnapShot.filter(jog => jog.date > dateFrom && jog.date < dateTo)
            };
        default:
            return state
    }
};

const setJogs = (jogs) => ({
    type: SET_JOGS,
    jogs
});

export const jogsByDates = (dateFrom, dateTo) => ({
    type: JOGS_BY_DATES,
    dateFrom,
    dateTo
});


export const getJogs = () => async (dispatch) => {
    const requestJogs = await requestService.get('/data/sync');
    const {jogs} = requestJogs;
    dispatch(setJogs(jogs))
};
