let canvas = document.getElementById('canvas');
let world = new World(canvas);

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
    console.log(new Point()); ///DEBUG
}