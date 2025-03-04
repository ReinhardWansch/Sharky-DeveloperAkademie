/*################*/
/*## BACKGROUND ##*/
/*################*/

const BG_OBJECTS_LEVEL_1 = [
    new BgObject('./img/3. Background/Layers/5. Water/D.png', 0, 5), //water
    new BgObject('./img/3. Background/Layers/1. Light/COMPLETO.png', 2, 1), //lightrays
    new BgObject('./img/3. Background/Layers/2. Floor/D.png', 10, 5) //floor
];

/*#############*/
/*## ENEMIES ##*/
/*#############*/

const ENEMIES_LEVEL_1 = [
    new LivingMOb('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png', 0),
];
ENEMIES_LEVEL_1.forEach((enemyI) => {
    enemyI.position.x = 500;
    enemyI.position.y = 150;
    enemyI.scaleFactor.scaleTo(0.25);
    enemyI.startMovingLeft();
});