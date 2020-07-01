import {
    JOGS_BY_DATES,
    SET_JOGS,
    CHANGE_FILTER_VISIBLE,
    CHANGE_IS_FETCHING_STATUS
} from '../actions/jogs';
import {RequestService} from '../../API';

const requestService = new RequestService();

const initialState = {
    jogs: [],
    jogsSnapShot: [],
    filterVisible: false,
    isFetching: false
};

export const jogs = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOGS:
            const { jogs } = action;
            return {...state, jogs, jogsSnapShot: jogs};
        case JOGS_BY_DATES:
            const { dateFrom, dateTo } = action;
            return {
                ...state, jogs: state.jogsSnapShot.filter(jog => jog.date > dateFrom && jog.date < dateTo)
            };
        case CHANGE_FILTER_VISIBLE:
            return { ...state, filterVisible: !state.filterVisible };
        case CHANGE_IS_FETCHING_STATUS:
            return { ...state, isFetching: action.status };
        default:
            return state
    }
};

const setJogs = jogs => ({
    type: SET_JOGS,
    jogs
});

export const jogsByDates = (dateFrom, dateTo) => ({
    type: JOGS_BY_DATES,
    dateFrom,
    dateTo
});

export const changeFilterVisible = () => ({
   type: CHANGE_FILTER_VISIBLE
});

const changeIsFetchingStatus = status => ({
    type: CHANGE_IS_FETCHING_STATUS,
    status
});


export const getJogs = () => async dispatch => {
    dispatch(changeIsFetchingStatus(true));
    const requestJogs = await requestService.get('/data/sync');
    const {jogs} = requestJogs;
    dispatch(setJogs(jogs));
    dispatch(changeIsFetchingStatus(false));
};

export const addNewJog = (data) => async dispatch => {
    dispatch(changeIsFetchingStatus(true));
    await requestService.post('/data/jog', data);
    const requestJogs = await requestService.get('/data/sync');
    const {jogs} = requestJogs;
    dispatch(setJogs(jogs));
    dispatch(changeIsFetchingStatus(false));
};
