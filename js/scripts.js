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
    numArr.push(index);
    if (str.includes("3") === true) 
      console.log("check")
    }





  




  // ui
  document.getElementById("result").innerText = numArr
};




