import moment from 'moment';

export const cutString = (string, length) => {
  if (typeof string != 'string') string = JSON.stringify(string);
  if (string?.length < length) return string;

  return string?.substring(0, length) + '...';
};

export const convertMinuteInTime = (totalMin) => {
  totalMin = Number(totalMin);
  if (totalMin > 59) {
    let hr = Math.floor(totalMin / 60);
    let minute = Math.floor(totalMin % 60);
    if (minute == 0) return hr + 'hr';
    else return hr + 'hr' + ' ' + minute + 'min';
  } else {
    return totalMin + 'min';
  }
};

export const convertToDisplayTime = (time) => {
  return moment(time, 'HH:mm:ss').format('hh:mm a');
};
