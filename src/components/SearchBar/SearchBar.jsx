import React from 'react';
import DatePicker from "react-datepicker";
import moment from "moment";

export const SearchBar = ({ dateFrom, setDateFrom, dateTo, setDateTo }) => (
    <div className='jogs-search'>
        <div className='jogs-search-wrapper'>
            <span className='jogs-search-description'>Date from</span>
            <DatePicker
                popperPlacement='top-start'
                className='jogs-search-input'
                value={dateFrom}
                onChange={date => setDateFrom(moment(date).format('DD.MM.YYYY'))}
            />
            <span className='jogs-search-description'>Date to</span>
            <DatePicker
                popperPlacement='top-end'
                className='jogs-search-input'
                value={dateTo}
                onChange={date => setDateTo(moment(date).format('DD.MM.YYYY'))}
            />
        </div>
    </div>
);