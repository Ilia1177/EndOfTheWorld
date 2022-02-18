export default class Character {

    constructor(game) {
        this.image = document.getElementById("langue");
        this.width = 100;
        this.height = 50;
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.speed = {x:0, y:0};
        this.maxSpeed = {x:10, y:10};

        this.position = {
            x: game.gameWidth/2 - this.width /2,
            y: game.gameHeight - this.height +10
        };
    }

    

    draw(ctx, index){
        index++;
        ctx.drawImage(
            this.image,
            50,
            Math.floor((index % 9)/3)* this.height,
            this.height,
            this.width,
            this.position.x, 
            this.position.y,
            this.width,
            this.height,
            );

    }
    

    moveLeft() {
        this.speed.x = -this.maxSpeed.x;
    }

    moveRight() {
            this.speed.x = this.maxSpeed.x;
    }

    moveUp() {
            this.speed.y = -this.maxSpeed.y;
    }

    moveDown() {
            this.speed.y = this.maxSpeed.y;
    }
    stop(){
            this.speed.x =0;
            this.speed.y =0;
        }

    update(deltaTime) {
        if (!deltaTime) 
            return;

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x < 0)
        this.position.x = 0;

        if (this.position.x + this.width > this.gameWidth)
        this.position.x = this.gameWidth - this.width;

        if(this.position.y < 0)
        this.position.y = 0;

        if(this.position.y > this.gameHeight)
        this.position.y = this.gameHeight - this.height;
    }   
    
}
