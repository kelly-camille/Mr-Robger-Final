window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", counting);
});
// business logic
function counting(event) {
  event.preventDefault();
  const countTo = parseInt(document.getElementById("countTo").value);
  const finalNumb = []
  for (let index = 0; index <= countTo; index += 1) {
    finalNumb.push(index);
    }
  finalNumb.forEach(function(element) {
    console.log("checking current element", element)
    if (element === 3) 
      console.log("check")
    }
  );







  // ui
  document.getElementById("result").innerText = finalNumb
};