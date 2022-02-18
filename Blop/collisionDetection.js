export function detectCollision (oeuil, gameObject) {

    let topOfOeuil = oeuil.position.y
    let botOfOeuil = oeuil.position.y + oeuil.size;

    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;



    if (
        botOfOeuil >= topOfObject
    &&  topOfOeuil <= bottomOfObject
    && oeuil.position.x >= leftSideOfObject
    && oeuil.position.x + oeuil.size <= rightSideOfObject

    ){     
    return true;
    } else {
    return false;
    }
}