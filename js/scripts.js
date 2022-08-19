window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", counting);
});
// business logic
function counting(event) {
  event.preventDefault();
  const countTo = parseInt(document.getElementById("countTo").value);
  const numArr = []
  for (let index = 0; index <= countTo; index += 1) {
    numArr.push(index);


  console.log(numArr)
  numArr.forEach(function(element) {
    if (numArr.includes("3") === true) 
      console.log(check)
    })



  }




  // ui
  document.getElementById("result").innerText = numArr
};




