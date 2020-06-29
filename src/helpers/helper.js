import moment from 'moment';

export const getUnixDate = date => moment(date, 'DD.MM.YYYY').valueOf() / 1000;