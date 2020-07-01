import React from 'react';
import jogIcon from './images/icon.png';
import moment from "moment";

export const Jog = ({ date, distance, time }) => (
    <div className='jogs-item'>
        <img className='jogs-item-icon' src={jogIcon} alt="icon"/>
        <div className='jogs-item-content'>
            <div className='jogs-item-date'>{moment.unix(date).format('DD.MM.YYYY')}</div>
            <div className='jogs-item-desc'>
                <span className='jogs-item-title'>Speed:</span>
                <span>{(distance / time).toFixed(0)}</span>
            </div>
            <div className='jogs-item-desc'>
                <span className='jogs-item-title'>Distance:</span>
                <span>{`${distance} km`}</span>
            </div>
            <div className='jogs-item-desc'>
                <span className='jogs-item-title'>Time:</span>
                <span>{`${time} min`}</span>
            </div>
        </div>
    </div>
);