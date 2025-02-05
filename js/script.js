let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let level1= new Level(ctx);
level1.bgObjects= BG_OBJECTS_LEVEL_1;
let world = new World(ctx, level1);
let keyboard = new Keyboard();



function init() {
    addKeyListeners();
}

/*##############*/
/*## KEYBOARD ##*/
/*##############*/

function addKeyListeners(){
    document.addEventListener('keydown', keydownHandler);
    document.addEventListener('keyup', keyupHandler);
}

function keydownHandler(event) {
    keyboard[event.key] = true;
}

function keyupHandler(event) {
    keyboard[event.key] = false;
}

/*##########*/
/*## MISC ##*/
/*##########*/

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
    // world.character.speedX= 1;
    world.level.bgObjects[0].speedX= 1;
}