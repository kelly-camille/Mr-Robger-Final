window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handlesEvent);

});
function counting(countTo) {
const numArr = []
for (let index = 0; index <= countTo; index +=1) {
  const str = index.toString();
  if(str.includes("3") === true) {
    numArr.push("Won't you be my neighbor?");
  } else if (str.includes("2") === true) {
    numArr.push("Beep!");
  }  else if (str.includes("1") === true) {
      numArr.push("Boop!");
  } else {
    numArr.push(index);
  }
  }
  return numArr;
}
// ui
function handlesEvent(event) {
  event.preventDefault();
  const userInput = parseInt(document.getElementById("countTo").value);
  const numArr = counting(userInput);
  document.getElementById("result").innerText = numArr
}
