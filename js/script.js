console.log('script.js'); ///DEBUG

let canvas = document.getElementById('canvas');
prepareLevel1();
let world = new World(canvas, level1);
function init() {
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/*###########*/
/*## DEGUG ##*/
/*###########*/

function tuEs() {
    world.character.speed.speedX = 1;
    world.character.isMoving = true;
}