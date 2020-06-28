import { RequestService } from "../../API";
import { SET_USER } from "../actions/auth";
const requestService =  new RequestService();

const initialState = {
    isAuth: false,
    user: null
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user, isAuth: true };
        default:
            return state
    }
};

const setUser = user => ({
   type: SET_USER,
   user
});

export const letMeIn = () => async (dispatch) => {
    const formData = new FormData();
    formData.append('uuid', 'hello');
    const responseToken = await requestService.post('/auth/uuidLogin', formData)
    const token = responseToken.access_token;
    localStorage.setItem('token', token);
    const user = await requestService.get('/auth/user');
    dispatch(setUser(user));
};
