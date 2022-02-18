const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = './flappy-bird-set.png';

let gamePlaying = false;
const gravity = .4;
const speed = 3.2;

const size = [51, 36];
const jump = -5.6;
const cTenth = (canvas.width / 10);

// poto
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) - pipeWidth + pipeWidth;

let index = 0,
    bestScore = 0, 
    currentScore =0,
    pipes = [],
    flight,
    flyHeight = (canvas.height / 2) - (size[1] / 2);

const setup = () => {
    currentScore = 0;
    flight = jump;
    flyHeight = (canvas.height /2) - (size[1] /20);

    pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);

};

const render = () => {
        index++;
    //backGround
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -(index * (speed/2)% canvas.width)+ canvas.width, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -(index * (speed/2)% canvas.width), 0, canvas.width, canvas.height);
    //jeu ON img oiseau
        if (gamePlaying) {
            ctx.drawImage(img, 432, Math.floor((index % 9)/3)* size[1], ...size, cTenth, flyHeight, ...size); //bird
            flight += gravity;
            flyHeight = Math.min(flyHeight + flight, canvas.height - size[1])
    } else {
    //jeu OFF
            ctx.drawImage(img, 432, Math.floor((index % 9)/3)* size[1], ...size, (canvas.width /2 - size[0] /2), flyHeight, ...size);
    //texte et credits

            ctx.font = "bold 30px courrier";
            ctx.fillText('Meilleur Score ! :' + bestScore, 55, 245);
            ctx.fillText('Score', 48, 535);
        }

        if(gamePlaying) {
            pipes.map(pipe => {
            pipe[0] -= speed;

            //top pipe
            ctx.drawImage(
                img, 
                432, 
                588 - pipe[1], 
                pipeWidth, 
                pipe[1], 
                pipe[0], 
                0, 
                pipeWidth, 
                pipe[1]
            );

            //bottom pipe
            ctx.drawImage(
                img, 
                432 + pipeWidth, 
                108, 
                pipeWidth, 
                canvas.height - pipe[1] + pipeGap,
                pipe[0], 
                pipe[1] + pipeGap, 
                pipeWidth, 
                canvas.height - pipe[1]+pipeGap
           );


                if (pipe[0] <= -pipeWidth) {
                    currentScore++
                     bestScore = Math.max(bestScore, currentScore);

                    //remove pipe + creat new one

                    pipes = [...pipes.slice(1), [pipes[pipes.length-1][0]+pipeGap+pipeWidth, pipeLoc()]];
                }
                if([
                    pipe[0] <= cTenth + size[0],
                    pipe[0] + pipeWidth >= cTenth,
                    pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1]
                ].every(elem => elem)) {
                    gamePlaying = false;
                    setup();
                }
                
            
            }
        )
    };
    
    document.getElementById('bestScore').innerHTML = "Best Score ="+ bestScore;
    document.getElementById('currentScore').innerHTML = "Score ="+ currentScore;

    window.requestAnimationFrame(render)
}
setup();
img.onload = render;

document.addEventListener('click', () => gamePlaying = true);
window.onclick = () => flight = jump;

