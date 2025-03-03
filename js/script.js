let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let world = new World(ctx);
let level1 = new Level(ctx);
level1.bgObjects = BG_OBJECTS_LEVEL_1;
level1.scaleBGObjectsToHeight(canvas.height);
level1.enemies = ENEMIES_LEVEL_1;
setCharacter(world);
world.character.setIdleImages(sharkyIdleImages);
world.setLevel(level1);
world.level.decodeAllBgImages()
    .then(() => {
        world.draw();
    }).catch(() => {
        console.log('Fehler beim bg-Images decoden!'); ///DEBUG
    });

/*###############*/
/*## CHARACTER ##*/
/*###############*/

function setCharacter(world) {
    let newCharacter = new Character('./img/1.Sharkie/1.IDLE/1.png', 0.25);
    // let newCharacter = new Character('./img/1.Sharkie/1.IDLE/1-mod-redBorder.png', 0.25);
    newCharacter.position.x = 10;
    newCharacter.position.y = 150;
    newCharacter.scaleFactor.scaleTo(0.25);
    newCharacter.speed = 5;
    newCharacter.setKeyboard(new Keyboard());
    newCharacter.keyboard.addKeyListenersTo(document);
    world.character = newCharacter;
}

/*###########*/
/*## DEGUG ##*/
/*###########*/

function tuEs() {
    console.log(world.level.enemies);
    console.log(world.level.enemies[0]);
    console.log(level1.enemies); ///DEBUG
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