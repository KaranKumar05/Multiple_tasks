// Task 1 js 
function factorial() {
    let inputNumber = document.querySelector("#input_1").value;
    let number = parseInt(inputNumber);
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    document.querySelector("#output_1").textContent = `Factorial of ${number} is ${factorial}.`;
}

//   Task 2 js 
function vowelRemove() {
    let inputString = document.querySelector("#input_2").value;
    let outputElement = document.querySelector("#output_2");
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let result = inputString.replace(new RegExp(vowels.join("|"), "g"), "");

    outputElement.textContent = result;
}

//Task 3 js
function largestNumber() {
    let input = document.querySelector("#input_3").value;
    let numbers = input.split(",").map((number) => parseInt(number));
    let largest = Math.max(...numbers);
    let output = document.querySelector("#output_3");
    output.textContent = `Largest number betwwen ${input} is ${largest}`;
}

//task 4 js
function capitalize() {
    let inputText = document.querySelector("#input_4").value;
    let outputText = "";
    let capitalizeNextChar = true;
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charAt(i);

        if (capitalizeNextChar) {
            outputText += char.toUpperCase();
            capitalizeNextChar = false;
        } else {
            outputText += char;
        }
        if (char === " ") {
            capitalizeNextChar = true;
        }
    }
    let outputElement = document.querySelector("#output_4");
    outputElement.textContent = outputText;
}

//Task 5 js
function average() {
    let inputString = document.querySelector("#input_5").value;
    let inputArray = inputString.split(",");
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += parseInt(inputArray[i]);
    }
    let average = sum / inputArray.length;
    document.querySelector("#output_5").textContent = average;
}

//Task 6 js
//
//

//Task 7 js
//
//

//Task 8 js
function primeNumber() {
    let number = parseInt(document.querySelector("#input_8").value);
    let isPrime = true;
    if (number === 1) {
        isPrime = false;
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    } else {
        isPrime = false;
    }
    if (isPrime == true) {
        let outputElement = document.querySelector("#output_8").textContent = `Yes ${number} is a prime Number`;
    } else {
        let outputElement = document.querySelector("#output_8").textContent = `No ${number} is Not a prime Number`;
    }
}

// Task 9 js
//
//