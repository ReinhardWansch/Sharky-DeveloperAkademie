const ENEMY_SPAWN_XPOS= 550;
const ENEMY_SPAWN_YPOS= 350;
let canvas1= document.getElementById('canvas1');
let world= new World(canvas1);

function init() {
    world.draw();
}

/*###########*/
/*## DEBUG ##*/
/*###########*/

function tuEsScript() {
    world.addEnemy(ENEMY_SPAWN_XPOS, ENEMY_SPAWN_YPOS);
    world.addEnemy(ENEMY_SPAWN_XPOS, ENEMY_SPAWN_YPOS-50);
    world.addEnemy(ENEMY_SPAWN_XPOS, ENEMY_SPAWN_YPOS-100);
    world.drawEnemies();
}

function tuEsSCript2(){
    let img= new Image();
    img.scr= './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png';
}