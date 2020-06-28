import React from 'react';
import './Header.scss';
import logoBear from './images/logo.png';

export const Header = (props) => {
    return(
        <header className='header'>
            <img className='header-logo' src={logoBear} alt="logo"/>
        </header>
    )
}