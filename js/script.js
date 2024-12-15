let canvas1= document.getElementById('canvas1');
let ctx= canvas1.getContext('2d');
let world= new World();

function init() {
    console.log(world); ///DEBUG
}

/*###########*/
/*## DEBUG ##*/
/*###########*/

function tuEsScript() {
    world.enemies.push(new Enemy());
}