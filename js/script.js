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
    let img= new Image();
    img.src= './img/1.Sharkie/1.IDLE/1.png';
    img.decode()
        .then(()=> ctx.drawImage(img,0,0,203,250));
}