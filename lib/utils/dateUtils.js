import Moment from 'moment';

export function getCurrentMonth() {
  const momentInstance = new Moment();
  const shortMonth = momentInstance.format('MMM');

  return shortMonth;
}

export function getCurrentDate() {
  const momentInstance = new Moment();
  const date = momentInstance.format('DD');

  return date;
}
