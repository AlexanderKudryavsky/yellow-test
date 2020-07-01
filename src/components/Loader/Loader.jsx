import React from 'react';
import loaderSVG from './svg/Rolling-2.6s-200px.svg';
import './Loader.scss';

export const Loader = () => (
    <div className='loader'>
        <img src={loaderSVG} alt="loading..."/>
    </div>
);