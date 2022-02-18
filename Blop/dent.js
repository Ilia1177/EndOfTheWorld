import {detectCollision} from './collisionDetection.js';

export default class Dent {
    constructor(game, position){
    this.image = document.getElementById('dent');
    this.game =game;

    this.position = position
    this.width = 80;
    this.height = 24;

    this.markedForDeletion = false;
    }

    update(){
        if (detectCollision(this.game.oeuil, this)) {
            this.game.oeuil.speed.y = - this.game.oeuil.speed.y;
            this.markedForDeletion = true;
        }
    }
    
    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        );
    }
}