import Dent from './dent.js';

export function buildLevel (game, level) {
    
    let dents = [];

    level.forEach((row, rowIndex) => {

        row.forEach((dent, dentIndex) => {
            if(dent === 1 ) {
                let position = { 
                    x:80 * dentIndex,
                    y:20 + 24 * rowIndex
                };        
                dents.push(new Dent(game, position));

    
            
            }
        });
    });

    return dents;
}



export const level1 = [
    [1 ,1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1 ,1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1 ,1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1 ,1, 1, 1, 1,1, 1, 1, 1, 1],
    [1 ,1, 1, 1, 1, 1, 1, 1,1, 1],
    [1 ,1, 1, 1, 1, 1, 1, 1, 1, 1]
]