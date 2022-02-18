import Game from './game.js';

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let GAME_WIDTH = canvas.width;
let GAME_HEIGHT = canvas.height; 

let speed = 3;
let lastTime = 0;
let index = 0;

let game = new Game (GAME_WIDTH, GAME_HEIGHT);

game.start()


function gameLoop (timestamp) {
    
    ctx.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT);
    ctx.drawImage(game.character.image, 0, 0, canvas.width, canvas.height, -(index * (speed/2)% canvas.width)+ canvas.width, 0, canvas.width, canvas.height);
    ctx.drawImage(game.character.image, 0, 0, canvas.width, canvas.height, -(index * (speed/2)% canvas.width), 0, canvas.width, canvas.height);

    let deltaTime = timestamp - lastTime ;
    lastTime = timestamp;

    game.update(deltaTime);
    game.draw (ctx, index);

    index++;
    requestAnimationFrame(gameLoop);
    
};

requestAnimationFrame(gameLoop);
