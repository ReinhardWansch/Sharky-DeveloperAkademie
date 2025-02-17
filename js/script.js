let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let level1= new Level(ctx);
level1.bgObjects= BG_OBJECTS_LEVEL_1;
// level1.addBgObject(BG_OBJECTS_LEVEL_1, 2);
level1.scaleBGObjectsToHeight(canvas.height);
let world = new World(ctx);
world.setLevel(level1);
// setKeyboard(world.character);
world.draw();

/*
function setKeyboard(mob) {
    mob.setKeyboard(new Keyboard());
    mob.keyboard.addKeyListenersTo(document);
}
*/

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
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    level1.bgObjects[0].scaleToHeight(ctx.canvas.height/4);
    level1.bgObjects[0].draw(ctx);
}

function drawBgObject(index) {
    world.level.bgObjects[index].draw(world.ctx);
}

function logKeyboard() {
    console.log(world.character.keyboard);
}

function logLevel() {
    console.log(world.level); ///DEBUG
}

function logBgObjects() {
    world.level.bgObjects.forEach((bgObjectI) => console.log(bgObjectI));
}

function logCharacter() {
    console.log(world.character);
}  

function logCameraoffset() {
    console.log(world.character.cameraOffset);
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

function translateCTX() {
    world.ctx.clearRect(0, 0, world.ctx.canvas.width, world.ctx.canvas.height);
    world.ctx.translate(50, 0);
    world.draw();
}