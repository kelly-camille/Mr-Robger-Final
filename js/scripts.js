window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", counting);
});
// business logic
function counting(event) {
  event.preventDefault();
  const countTo = parseInt(document.getElementById("countTo").value);
  
  const numArr = []
  for (let index = 0; index <= countTo; index += 1) {
    const str = index.toString();
    if (str.includes("3") === true) {
    numArr.push("Won't you be my neighbor?");
    } else if (str.includes("2") === true) {
    numArr.push("Boop!")
    } else if (str.includes("1") === true) {
      numArr.push ("Beep!")
    } else {
    numArr.push(index);
    }
  }
  // ui
  document.getElementById("result").innerText = numArr
};




