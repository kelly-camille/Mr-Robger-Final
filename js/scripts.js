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
  function includes1(element) {
    if (finalNumb.includes(1))
    return true;
     
  };







  // ui
  document.getElementById("result").innerText = finalNumb
};