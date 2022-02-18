export default class InputHandler {


    constructor(character, game){

        document.addEventListener('keydown', (evt) => {
            switch(evt.code) {

                case 'ArrowLeft':
                
                    character.moveLeft();

                    break;


                case 'ArrowRight':

                    character.moveRight();

                    break;

                case 'ArrowUp':
                    character.moveUp();
                    break;
                case 'ArrowDown':
                        character.moveDown();
                        break;

                case 'Enter' :
                        game.togglePause();
                        break;

                }

            }
        )

        document.addEventListener('keyup', (evt) => {

            switch(evt.code) {

                case 'ArrowLeft':

                if(character.speed.x < 0)

                character.stop();

                break;

                case 'ArrowRight':

                if(character.speed.x > 0)

                character.stop();

                break;

                case 'ArrowUp':

                if(character.speed.y < 0)

                character.stop();

                case 'ArrowDown':


                if(character.speed.y > 0)

                character.stop();
                    


                }

            }
        
        )
        
    }
    
};
