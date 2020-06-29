import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import jogIcon from './images/icon.png';
import './JogsList.scss';
import { getJogs, jogsByDates } from '../../redux/modules/jogs';
import { getUnixDate } from '../../helpers/helper';


export const JogsList = () => {
    const user = useSelector(state => state.auth.user);
    const jogs = useSelector(state => state.jogs.jogs);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const dispatch = useDispatch();
    console.log(jogs)

    useEffect(() => {
        dispatch(getJogs())
    }, []);

    useEffect(() => {
        const unixDateFrom = getUnixDate(dateFrom);
        const unixDateTo = getUnixDate(dateTo);
        if (unixDateFrom && unixDateTo) {
            dispatch(jogsByDates(unixDateFrom, unixDateTo));
        }
    }, [dateFrom, dateTo, setDateFrom, setDateTo]);

    return (
        <>
            <div className='jogs-search'>
                <div className='jogs-search-wrapper'>
                    <span className='jogs-search-description'>Date from</span>
                    <DatePicker
                        className='jogs-search-input'
                        value={dateFrom}
                        dateFormat="dd.mm.yyyy"
                        onChange={date => setDateFrom(moment(date).format('DD.MM.YYYY'))}
                    />
                    <span className='jogs-search-description'>Date to</span>
                    <DatePicker
                        className='jogs-search-input'
                        value={dateTo}
                        onChange={date => setDateTo(moment(date).format('DD.MM.YYYY'))}
                    />
                </div>
            </div>
            <div>
                {jogs.map(jog => <div id={jog.id} key={jog.id}>
                    <img src={jogIcon} alt=""/>
                    <div>{moment.unix(jog.date).format('DD.MM.YYYY')}</div>
                    <div>{jog.distance / jog.time}</div>
                    <div>{jog.distance}</div>
                    <div>{jog.time}</div>
                </div>)}
            </div>
        </>
    )
};