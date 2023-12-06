// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let box1 = document.getElementById("number1")
let box2 = document.getElementById("number2")
let box3 = document.getElementById('number3')

// Iteration 3: Creating variables required to make the game functional
var num1 = Math.round(Math.random() * 100)
var num2 = Math.round(Math.random() * 100)

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num3;

// Iteration 5: Creating a randomise function to make the game functional
function randomise() {
     num1 = Math.round(Math.random() * 100)
     num2 = Math.round(Math.random() * 100)

    if(num1<num2){
        let temp = num1
        num1 = num2
        num2 = temp
    }

    let operator = Math.round(Math.random() * 5)
    // console.log(operator)

    switch (operator) {
        case 1:
            num3 = num1 + num2;
            break;
        case 2:
            num3 = num1 - num2;
            break; 
        case 3:
            num3 = num1 * num2;
            break;
        case 4:
            num3=Math.round(num1 / num2);
            break;
        case 5:
            num3=num1 % num2;
            break;
        case 0:
            randomise();
    }

    box1.innerHTML = num1
    box2.innerHTML = num2
    box3.innerHTML = num3
}
randomise();

// Iteration 6: Making the Operators (button) functional
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")

var score = 0

plus.onclick = () => {
    if (num3 == num1 + num2){
        score++
        reset();

        randomise();
    }
    else {
        location.href = "./gameover.html?score="+score
    }
}

minus.onclick = () => {
    if (num3 == num1 - num2){
        score++
        reset();

        randomise();
    }
    else {
        location.href = "./gameover.html?score="+score    
    }
}

mul.onclick = () => {
    if (num3 == num1 * num2){
        score++
        reset();

        randomise();
    }
    else {
        location.href = "./gameover.html?score="+score   
    }
}

divide.onclick = () => {
    if (num3 == Math.round(num1 / num2)){
        score++
        reset();

        randomise();
    }
    else {
        location.href = "./gameover.html?score="+score    
    }

}

modulus.onclick = () => {
    if (num3 == num1 % num2){
        score++
        reset();

        randomise();
    }
    else {
        location.href = "./gameover.html?score="+score    
    }
}

// Iteration 7: Making Timer functional
let timer = document.getElementById("timer")
let time = 20;
let timerid;

function showtime (){
    time = 20;
    timer.innerHTML = time;

    timerid = setInterval(function(){
        time--
        if (time==0){
            location.href = "./gameover.html?score="+score 
        }
        timer.innerHTML = time
    },1000)
}

function reset (timerid){
    clearInterval(timerid)
    showtime();
}

showtime();