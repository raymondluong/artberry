function secToDisplay(sec) {
  var hours = Math.floor(sec / 3600);
  var minutes = Math.floor((sec % 3600) / 60);
  var seconds = sec % 60;

  var hoursString = hours > 1 ? `${hours} hours` : hours === 1 ? `${hours} hour` : '';
  var minutesString = minutes > 1 ? `${minutes} minutes` : minutes === 1 ? `${minutes} minute` : '';
  // var secondsString = seconds > 1 ? `${seconds} seconds` : seconds === 1 ? `${seconds} second` : '';
  var secondsString = seconds === 1 ? `${seconds} second` : `${seconds} seconds`;

  if (hoursString && minutesString && secondsString) {
    return `${hoursString}, ${minutesString}, and ${secondsString}`;
  } else if (minutesString && secondsString) {
    return `${minutesString} and ${secondsString}`;
  } else if (hoursString && secondsString) {
    return `${hoursString} and ${secondsString}`;
  } else if (hoursString && minutesString) {
    return `${hoursString} and ${minutesString}`;
  }
  
  return hoursString + minutesString + secondsString;
}

export default {
  secToDisplay: secToDisplay
};
