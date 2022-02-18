import {detectCollision } from './collisionDetection';



export default class Oeuil {

    constructor(game) {
        
        this.image = document.getElementById("oeuil");
        
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.speed = {x:3.5, y:3.5};
        this.position = {x:50, y:50};
        this.size = 17;
        this.game = game;

    }

    draw(ctx, index) {
        ctx.drawImage(
            this.image,
            Math.floor((index % 9)/3)*200,
            0,
            200,
            200,
            this.position.x,
            this.position.y,
            this.size,
            this.size,
            )
    }


    update(deltaTime){
        
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //wall detecttion
        if (this.position.x + this.size > this.gameWidth || this.position.x <0)
         this.speed.x = -this.speed.x;

        if(this.position.y + this.size > this.gameHeight || this.position.y <0)
         this.speed.y = -this.speed.y;

        if(detectCollision(this, this.game.character)){ 
        
        this.speed.y = -this.speed.y;
        this.position.y = this.game.character.position.y - this.size;
        
        }
    }
}