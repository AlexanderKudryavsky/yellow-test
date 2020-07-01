import React from 'react';
import './NotFound.scss';
import sadSmile from './images/sad-rounded-square-emoticon.png';

export const NotFound = ({ setNewJogIsOpen }) => {
    return (
        <div className='not-found'>
            <div className='not-found-content'>
                <div className='not-found-icon-wrapper'>
                    <img src={sadSmile} alt="sad smile"/>
                    <div className='not-found-description'>Nothing is there</div>
                </div>
                <button className='not-found-button' onClick={() => setNewJogIsOpen(true)}>Create your jog first</button>
            </div>
        </div>
    )
};