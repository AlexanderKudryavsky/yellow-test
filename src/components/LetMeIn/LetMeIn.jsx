import React, {useCallback} from 'react';
import './LetMeIn.scss';
import bearFace from './images/bear-face.png';
import { useDispatch, useSelector } from "react-redux";
import {letMeIn} from "../../redux/modules/auth";
import { useHistory } from "react-router-dom";

export const LetMeIn = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();
    const history = useHistory()

    console.log(isAuth)

    const onLetMeIn = useCallback(async () => {
        await dispatch(letMeIn());
        history.push('/jogs');
    }, [dispatch]);

    return (
        <div className='let-me-in'>
            <div className='let-me-in-window'>
                <div className='let-me-in-content'>
                    <img src={bearFace} alt="bear face"/>
                    <button onClick={onLetMeIn} className='let-me-in-button'>Let me in</button>
                </div>
            </div>
        </div>
    )
};