// GLA 1
// by: Glenn Perez

//Display full name inside h1 element and add the following style (align center and color gray or #A9A9A9)
let myBody = document.getElementsByTagName('body')[0];
let myName = document.createElement('h1');
myBody.appendChild(myName);
myName.innerHTML = 'Glenn Perez';
myName.style.color = '#A9A9A9';
myName.style.textAlign = 'center'

// Add JS code to append two input elements and one buton.
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let myButton = document.createElement('button');
let myResult = document.createElement('p');
myBody.appendChild(input1);
myBody.appendChild(input2);
myBody.appendChild(myButton);
myBody.appendChild(myResult);
myButton.textContent = "Add"


// When click the button, the sum of these two numbers will show on the page.
// Add JS code to create an arrow func􀆟on to validate the value of two input boxes
myButton.addEventListener('click', () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    myResult.innerHTML = 'The sum is: ' + (num1 + num2)
    myResult.style.color = 'black'
    input1.style.border = "1px solid black";
    input2.style.border = "1px solid black";

    // Only the number is validated. If input is not number, show the error message on
    // the page (DO NOT USE ALERT) and set the input box with red border.
    try {
        if (((input1.value.trim() == "") || isNaN(num1)) && ((input2.value.trim() == "") || isNaN(num2))) throw 0;
        else if ((input1.value.trim() == "") || isNaN(num1)) throw 1;
        else if ((input2.value.trim() == "") || isNaN(num2)) throw 2;
    } catch (err) {
        myResult.style.color = 'red'
        if (err == 0) {
            input1.style.border = "1px solid red";
            input2.style.border = "1px solid red";
            myResult.innerHTML = "Inputs 1 and 2 are not numbers";
        } else if (err == 1) {
            input1.style.border = "1px solid red";
            myResult.innerHTML = 'Input 1 is not a number';
        } else {
            input2.style.border = "1px solid red";
            myResult.innerHTML = 'Input 2 is not a number';
        }

    }
})

// Add JS code to style your page.
input1.style.margin = "10px";
input2.style.margin = "10px";
myButton.style.margin = "10px";
myResult.style.margin = "10px";
document.body.style.backgroundColor = 'rgb(255,253,175)';