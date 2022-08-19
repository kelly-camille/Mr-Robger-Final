window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", counting);
});
// business logic
function counting(event) {
  event.preventDefault();
  const countTo = parseInt(document.getElementById("countTo").value);
  const numbArr = []
  for (let index = 0; index <= countTo; index += 1) {
    numbArr.push(index);
   

  const stringArr = numbArr.map();
    return numbArr.tostring();
  



  // numbArr.forEach(function(element) {
  //   numbArr.split(" ")
  //   if (element === 3) 
  //     console.log("check")
  //   }



  }




  // ui
  document.getElementById("result").innerText = stringArr
};