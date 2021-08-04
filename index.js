// Code your solutions in this file
function writeCards(arr, eventName) {

  let eventArr = [];
  for (let i = 0; i < arr.length; i++) {
    eventArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
  }
  return eventArr;
}

function countDown(number) {
  let i = number;

  while (i >= 0) {
    console.log(i);
    i--;
  }
}