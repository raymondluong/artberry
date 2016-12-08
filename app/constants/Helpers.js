function secToDisplay(sec) {
  var minutes = Math.floor(sec / 60);
  var seconds = sec % 60;
  var minutesString = `${minutes} minutes`;
  if (minutes < 1) {
    minutesString = '';
  }
  var secondsString = `${seconds} seconds`;
  if (seconds === 0) {
    secondsString = '';
  } else if (seconds === 1) {
    secondsString = `${seconds} second`;
  }
  if (minutesString && secondsString) {
    return `${minutesString} and ${secondsString}`;
  }
  return minutesString + secondsString;
}

export default {
  secToDisplay: secToDisplay
};
