import {combineReducers, createStore, applyMiddleware} from 'redux'
import {auth} from "./modules/auth";
import thunk from 'redux-thunk';
import { jogs } from "./modules/jogs";

const rootReducer = combineReducers({
        auth: auth,
        jogs: jogs
    }
);

export const store = createStore(rootReducer, applyMiddleware(thunk));