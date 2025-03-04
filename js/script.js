let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let world = new World(ctx);
let level1 = new Level(ctx);
let keyboard = new Keyboard();
level1.bgObjects = BG_OBJECTS_LEVEL_1;
setBackgroundsKeyboard(level1);
level1.scaleBGObjectsToHeight(canvas.height);
// level1.enemies = ENEMIES_LEVEL_1;
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
    newCharacter.position.x = 10;
    newCharacter.position.y = 150;
    newCharacter.scaleFactor.scaleTo(0.25);
    newCharacter.speed = 10;
    newCharacter.setKeyboard(keyboard);
    newCharacter.keyboard.addKeyListenersTo(document);
    world.character = newCharacter;
}

/*################*/
/*## BACKGROUND ##*/
/*################*/

function setBackgroundsKeyboard(level) {
    level.bgObjects.forEach((bgObject) => {
        bgObject.setKeyboard(keyboard);
    });
}








/*###########*/
/*## DEGUG ##*/
/*###########*/

function tuEs() {
    logBgObjectValues();
}

function logCharacterValues() {
    console.log(
        world.character.position.x,
        world.character.speed,
        world.character.velocity.velocityX,
    );
    
}

function setCharacterSpeed(speed) {
    world.character.speed = speed;
}

function logBgObjectValues() {
    world.level.bgObjects.forEach((bgObject) => {
        console.log(
            bgObject.position.x,
            bgObject.speed,
            bgObject.velocity.velocityX,
        );
    });
}