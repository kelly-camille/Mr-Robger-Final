#Mr Robger Final

#### By Kelly Bruce

#### takes input from user and modifies select values

## Technologies Used

* HTML
* JavaScript

## Description

application takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions:
*For numbers that contain a 1, all digits are replaced with "Beep!"
*For numbers that contain a 2, all digits are replaced with "Boop!"
*For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"

## Setup/Installation Requirements

* Clone using the repo link: https://github.com/kelly-camille/Mr-Robger-Final.git
* Open file named mr-robger-final
* open index.html in browser

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* No known bugs at this time

## License

MIT

Copyright (c) 8/19/22 Kelly Bruce




Describe: counting()
Test: 
"It should return an array of numbers from 0 to a determined number"
Code: 
for (let index = 0; index <= 5; index += 1) {
  console.log(index)
}
Expected Output: [0, 1, 2, 3, 4, 5]
------------------------------------------------------------------------------
Test: 
" It should return an array of numbers from 0 to the number inputted by user"
Code: 
const countTo = parseInt(document.getElementById("countTo").value);
const finalNumb = []
for (let index = 0; index <= countTo; index += 1) {
finalNumb.push(index);
}
Expected Output if user enters 5: 
[0, 1, 2, 3, 4, 5] 
------------------------------------------------------------------------------
Test
"it should determine if any number in array contains a 3"
Code:
const numArr = [1, 2, 3, 4];
function includes1(element) {
  if (element.includes(3)) {
    return true;
  }
}
Expected Output:
True
------------------------------------------------------------------------------
Test:
apply the value"Won't you be my neighbor?" instead of any index conaining "3"
code:
const = index.toString();
if(str.includes("3") === true {
  numArr.push("won't you be my neighbor?");
} else {
  numArr.push(index);
}
Expected Outcome:
1,2, Won't you be my neighbor?...
------------------------------------------------------------------------------
Test:
determine if any number in output contains a 2, and apply the value "Boop!"
Code:
if(str.includes("2") === true {
  numArr.push("Boop!");
} else {
  numArr.push(index);
Expected Outcome:
1, boop!, 3
------------------------------------------------------------------------------
Test:
determine if any number in output contains a 1, and apply the value "Beep!"
Code:
if(str.includes("1") === true {
  numArr.push("Beep!");
} else {
  numArr.push(index);
Expected Outcome:
beep!, 2, 3


