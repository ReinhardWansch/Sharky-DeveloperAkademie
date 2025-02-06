let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let level1= new Level(ctx);
level1.bgObjects= BG_OBJECTS_LEVEL_1;
let world = new World(ctx);
world.setLevel(level1);
setKeyboard(world.character);
world.draw();

function setKeyboard(mob) {
    mob.setKeyboard(new Keyboard());
    mob.keyboard.addKeyListenersTo(document);
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
    world.ctx.scale(-1, 1);
    world.ctx.translate(-world.ctx.canvas.width, 0);
    world.draw();
}

function logKeyboard() {
    console.log(world.character.keyboard);
}

function logCharacter() {
    console.log(world.character);
}  

function logCharacterVelocity() {
    console.log(world.character.velocity);
}

function logCharacterScaleFactor() {
    console.log(world.character.scaleFactor);
}

function logCharacterPosition() {
    console.log(world.character.position);
}