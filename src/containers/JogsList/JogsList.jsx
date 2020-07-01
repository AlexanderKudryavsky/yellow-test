import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import addIcon from './images/add.png';
import './JogsList.scss';
import { getJogs, jogsByDates } from '../../redux/modules/jogs';
import { getUnixDate } from '../../helpers/helper';
import { NewJog } from '../../components/NewJog/NewJog';
import { NotFound } from '../../components/NotFound/NotFound';
import { Jog } from '../../components/Jog/Jog';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import {Loader} from "../../components/Loader/Loader";


export const JogsList = () => {
    const jogs = useSelector(state => state.jogs.jogs);
    const filterVisible = useSelector(state => state.jogs.filterVisible);
    const isFetching = useSelector(state => state.jogs.isFetching);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [newJogIsOpen, setNewJogIsOpen] = useState(false);
    const dispatch = useDispatch();

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
        isFetching ? <Loader /> : <>
            {
                newJogIsOpen ? <NewJog setNewJogIsOpen={setNewJogIsOpen}/>
                    : <>
                        {filterVisible && <SearchBar
                            dateTo={dateTo}
                            setDateTo={setDateTo}
                            dateFrom={dateFrom}
                            setDateFrom={setDateFrom}
                        />}
                        {jogs.length  ? <>
                            <div className='jogs-container'>
                                {jogs.map(jog => <Jog key={jog.id} distance={jog.distance} date={jog.date} time={jog.time}/>)}
                            </div>
                            <div onClick={() => setNewJogIsOpen(true)} className='jogs-add'>
                                <img src={addIcon} alt='add'/>
                            </div>
                        </> : <NotFound setNewJogIsOpen={setNewJogIsOpen} />}
                    </>
            }
        </>
    )
};