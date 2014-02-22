function TimeCovert(n) {
  // define variables hours & minutes
  var hours, minutes;

  // take n and / 60
  hours = n / 60;
  // if greater than 1, add integer amount to hours
  if (hours < 1) {
    // then minutes is decimal amount * 60
    minutes = hours * 60;
    hours = 0;
  } else {
    minutes = n % 60;
    hours = Math.round(hours);
  }

  
  // return concat to result string
  return hours + ':' + minutes;
}