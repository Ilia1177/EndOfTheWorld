import Character from "./character.js";
import Oeuil from "./oeuil.js";
import InputHandler from './input.js';
import { buildLevel, level1 } from './level.js'

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {

    constructor (gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.gameState = GAMESTATE.RUNNING;
        this.character = new Character(this);
        this.oeuil = new Oeuil(this);
        new InputHandler(this.character, this);

        let yeux = [];
        for(let i=0; i<5; i++) {
            yeux.push(new Oeuil(this, {x:10, y:50}))
        };

        let dents = buildLevel(this, level1);

        this.gameObjects = [this.oeuil, this.character, ...dents]
    }   

    update(deltaTime){
        if(this.gameState === GAMESTATE.PAUSED) return;
       this.gameObjects.forEach(object => object.update(deltaTime))
       this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)

    }

    draw(ctx, index) {
        this.gameObjects.forEach(object => object.draw(ctx, index));
        if(this.gameState == GAMESTATE.PAUSED) {

            ctx.fillStyle = 'black';
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            
            
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textALign = "center";
            ctx.fillText ("Paused", this.gameWidth/2-50, this.gameHeight/2);
        }

    }

    togglePause(){
        if(this.gameState == GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING;
        }else{
            this.gameState = GAMESTATE.PAUSED;
        }
    }
}