function timeConversion(s) {
    // Write your code here
    const [hour, minutes, secondsWithCharacters] = s.split(':');
  const characters = secondsWithCharacters.slice(-2).toLowerCase();
  const seconds = secondsWithCharacters.slice(0, 2);
  let twelveHours = 12;
  let convertedTime = '';

  if (characters === 'pm') {
    convertedTime = Number(hour == 12 ? '00' : hour) + twelveHours;
  }
  if (characters === 'am') {
    convertedTime = hour == 12 ? '00' : hour;
  }

  return `${convertedTime}:${minutes}:${seconds}`;

}
var s = '12:51:61PM';
const res = timeConversion(s);
console.log(res);
//check is not a numberconst 
let name2 = "Pawan";
let age = 24;
console.log(isNaN(name2));
console.log(isNaN(age));

