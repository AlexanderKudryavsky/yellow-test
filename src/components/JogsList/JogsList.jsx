import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getJogs} from "../../redux/modules/jogs";

export const JogsList = () => {
    const user = useSelector(state => state.auth.user);
    const jogs = useSelector(state => state.jogs.jogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJogs())
    },[]);

    return(
        <div>jogs</div>
    )
};