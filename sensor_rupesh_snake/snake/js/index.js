
// game constants
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.wav');
const moveSound = new Audio('movement.mp3');
const musicSound = new Audio('background.mp3');
let score = 0;
let speed = 5;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }]

let food = { x: 6, y: 7 };
// game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();



}


function isCollide(sArr) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (sArr[i].x === sArr[0].x && sArr[i].y === sArr[0].y) {
            return true;
        }
    }
    if (sArr[0].x >= 18 || sArr[0].x <= 0 || sArr[0].y >= 18 || sArr[0].y <= 0) {
        return true;
    }
    return false;
}
//game engine function
function gameEngine() {
    // Part 1: Updating the snake array & Food
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over your final score is " + score + " Press any key to play again!");
        snakeArr = [{ x: 13, y: 15 }];
        musicSound.play();
        score = 0;
        scoreBox.innerHTML = "Score : 0";
    }

    // If you have eaten the food, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score += 1;
        scoreBox.innerHTML = "Score : " + score
        if (score > localStorage.getItem("highScore")) {
            localStorage.setItem("highScore", JSON.stringify(score));
            highScoreBox.innerHTML = " Highest Score : " + localStorage.getItem("highScore")
        }
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    // Part 2: Display the snake and Food
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);


}



//  main logic starts here
let highScore = localStorage.getItem('highScore');
if (highScore === null) {
    highScore = 0;
    localStorage.setItem("highScore", JSON.stringify(highScore));
}
else {
    highScoreBox.innerHTML = "Highest Score : " + highScore;

}


musicSound.play();
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 }// start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            //console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;

            break;

        case "ArrowDown":
            // console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            // console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            // console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;

    }
});


function abc(){


    let sensor = new GravitySensor({ frequency: 60 });
    
    sensor.start();
    sensor.onreading = () => {
    
    
        //for x
        inputDir = {x: 0, y: 1} // Start the game
        moveSound.play();
        if(sensor.x< -0.9){
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
        }
        if(sensor.x> 0.9){
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
        }
        if(sensor.y> 0.9){
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
    
        }
        if(sensor.y< -0.9){
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
        }
    };
    
    sensor.onerror = event => console.log(event.error.name, event.error.message);
    }
