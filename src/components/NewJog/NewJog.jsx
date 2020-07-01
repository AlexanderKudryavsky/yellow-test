import React, {useState} from 'react';
import moment from "moment";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import 'react-datepicker/dist/react-datepicker.css';
import cancelIcon from './images/cancel.png';
import './NewJog.scss';
import { addNewJog } from "../../redux/modules/jogs";

export const NewJog = ({ setNewJogIsOpen }) => {
    const isFetching = useSelector(state => state.jogs.isFetching);
    const dispatch = useDispatch();
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');

    const onSave = async () => {
        await dispatch(addNewJog({date, time, distance}));
        setNewJogIsOpen(false);
    };

    const simpleFieldsChecker = () => !(time && date && distance);

    return (
        <div className='let-me-in'>
            <div className='new-jog-window'>
                <div onClick={() => setNewJogIsOpen(false)} className='new-jog-cancel'>
                    <img src={cancelIcon} alt="cancel"/>
                </div>
                <div className='let-me-in-content new-jog-content'>
                    <div className='new-jog-form'>
                        <div className='new-jog-form-input-wrapper'>
                            <label className='new-jog-form-input-label' htmlFor="distance">Distance</label>
                            <input value={distance} onChange={e => setDistance(e.target.value)} className='new-jog-form-input' id="distance"
                                   type="number"/>
                        </div>
                        <div className='new-jog-form-input-wrapper'>
                            <label className='new-jog-form-input-label' htmlFor="time">Time</label>
                            <input className='new-jog-form-input' id="time" type="number" value={time}
                                   onChange={e => setTime(e.target.value)}/>
                        </div>
                        <div className='new-jog-form-input-wrapper'>
                            <label className='new-jog-form-input-label' htmlFor="date">Date</label>
                            <DatePicker
                                id='date'
                                className='new-jog-form-input'
                                value={date}
                                onChange={date => setDate(moment(date).format('DD.MM.YYYY'))}
                            />
                        </div>
                    </div>
                    <button disabled={isFetching || simpleFieldsChecker()} onClick={onSave} className='let-me-in-button new-jog-button'>Save</button>
                </div>
            </div>
        </div>
    )
};