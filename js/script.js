let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let level1= new Level(ctx);
level1.bgObjects= BG_OBJECTS_LEVEL_1;
let world = new World(ctx);
world.setLevel(level1);
setKeyboard();
world.draw();

function setKeyboard() {
    world.character.setKeyboard(new Keyboard());
    world.character.keyboard.addKeyListeners(document);
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
    world.level.bgObjects[0].speedX= -1;
}

function logKeyboard() {
    console.log(world.character.keyboard);
}