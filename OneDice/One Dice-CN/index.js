
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

// getting dice image elements in array to change picture dynamically on next number pick
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];


image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

document.querySelector("h1").innerHTML =  randomNumber1 ;
document.querySelector("h1").innerHTML =  randomNumber2 ;

// comparing random numbers generated above to 
if ( randomNumber1 > randomNumber2) {
    console.log(`${randomNumber1} dice one beats dice two ${randomNumber2}`);
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    console.log(`${randomNumber2} dice two beats dice one ${randomNumber1}`);
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else
    document.querySelector("h1").innerHTML = "Players Tied!";
    