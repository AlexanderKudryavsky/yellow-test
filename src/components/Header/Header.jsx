import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './Header.scss';
import logoBear from './images/logo.png';
import filterIcon from './images/filter.png';
import filterActiveIcon from './images/filter-active.png';
import burgerIcon from './images/menu.png';
import logoMenu from './images/logo-menu.png';
import closeIcon from './images/close.png';
import {changeFilterVisible} from "../../redux/modules/jogs";

export const Header = () => {
    const dispatch = useDispatch();
    const filterVisible = useSelector(state => state.jogs.filterVisible);
    const isAuth = useSelector(state => state.auth.isAuth);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const onChangeFilterVisible = () => {
        dispatch(changeFilterVisible());
    };

    return (
        mobileMenuVisible ? <div className='header-mobile-menu'>
                <div className='header-mobile-menu-head'>
                    <img src={logoMenu} alt="logo"/>
                    <img onClick={() => setMobileMenuVisible(false)} src={closeIcon} alt="close"/>
                </div>
                <div className='header-mobile-menu-navigation'>
                    <NavLink onClick={() => setMobileMenuVisible(false)} to='/jogs' className='header-mobile-menu-navigation-item'
                             activeClassName='header-mobile-menu-navigation-item-active'>
                        jogs
                    </NavLink>
                    <NavLink onClick={() => setMobileMenuVisible(false)} to='info' className='header-mobile-menu-navigation-item'
                             activeClassName='header-mobile-menu-navigation-item-active'>
                        info
                    </NavLink>
                    <NavLink onClick={() => setMobileMenuVisible(false)} to='contact-us' className='header-mobile-menu-navigation-item'
                             activeClassName='header-mobile-menu-navigation-item-active'>
                        contact us
                    </NavLink>
                </div>
            </div>
            : <header className='header'>
                <img className='header-logo' src={logoBear} alt="logo"/>
                {isAuth && <div className='header-navigation'>
                    <nav className='header-navigation header-navigation-nav'>
                        <NavLink to='/jogs' className='header-navigation-item'
                                 activeClassName='header-navigation-item-active'>
                            jogs
                        </NavLink>
                        <NavLink to='info' className='header-navigation-item'
                                 activeClassName='header-navigation-item-active'>
                            info
                        </NavLink>
                        <NavLink to='contact-us' className='header-navigation-item'
                                 activeClassName='header-navigation-item-active'>
                            contact us
                        </NavLink>
                    </nav>
                    <div onClick={onChangeFilterVisible} className='header-navigation-item-filter'>
                        <img src={filterVisible ? filterActiveIcon : filterIcon} alt="filter"/>
                    </div>
                    <div onClick={() => setMobileMenuVisible(true)} className='header-navigation-item-burger'>
                        <img src={burgerIcon} alt="menu"/>
                    </div>

                </div>}
            </header>
    )
};
