// (function time() {
//   let date = new Date(),
//     hours = date.getHours(),
//     minutes = date.getMinutes(),
//     secounds = date.getSeconds(),
//     flag = 'AM';

//   hours == 0 ? (hours = 12) : hours;
//   if (hours > 12) {
//     hours = hours - 12;
//     flag = 'PM';
//   }
//   if (secounds < 10) secounds = '0' + secounds;
//   if (minutes < 10) minutes = '0' + minutes;
//   if (hours < 10) hours = '0' + hours;

//   document.querySelector(
//     '.clock'
//   ).innerText = `${hours} :${minutes} :${secounds} :${flag}`;

//   setTimeout(function () {
//     time();
//   }, 1000);
// })();

(function time() {
  let date = new Date();
    let timeNow = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      secounds: date.getSeconds(),
      flag: 'AM',
    };

  this.hours == 0 ? (this.hours = 12) : this.hours;
  if (timeNow.hours > 12) {
    timeNow.hours = timeNow.hours - 12;
    timeNow.flag = 'PM';
  }
  if (timeNow.secounds < 10) timeNow.secounds = '0' + timeNow.secounds;
  if (timeNow.minutes < 10) timeNow.minutes = '0' + timeNow.minutes;
  if (timeNow.hours < 10) timeNow.hours = '0' + timeNow.hours;

  document.querySelector(
    '.clock'
  ).innerText = `${timeNow.hours} :${timeNow.minutes} :${timeNow.secounds} :${timeNow.flag}`;

  setTimeout(function () {
    time();
  }, 1000);
})();
