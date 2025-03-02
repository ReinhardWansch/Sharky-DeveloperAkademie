/*############*/
/*## SHARKY ##*/
/*############*/

let sharkyIdleImages = [];
let sharkyIdleImagesPaths = [
    './img/1.Sharkie/1.IDLE/1.png',
    './img/1.Sharkie/1.IDLE/2.png',
    './img/1.Sharkie/1.IDLE/3.png',
    './img/1.Sharkie/1.IDLE/4.png',
    './img/1.Sharkie/1.IDLE/5.png',
    './img/1.Sharkie/1.IDLE/6.png',
    './img/1.Sharkie/1.IDLE/7.png',
    './img/1.Sharkie/1.IDLE/8.png',
    './img/1.Sharkie/1.IDLE/9.png',
    './img/1.Sharkie/1.IDLE/10.png',
    './img/1.Sharkie/1.IDLE/11.png',
    './img/1.Sharkie/1.IDLE/12.png',
    './img/1.Sharkie/1.IDLE/13.png',
    './img/1.Sharkie/1.IDLE/14.png',
    './img/1.Sharkie/1.IDLE/15.png',
    './img/1.Sharkie/1.IDLE/16.png',
    './img/1.Sharkie/1.IDLE/17.png',
    './img/1.Sharkie/1.IDLE/18.png'
];
sharkyIdleImagesPaths.forEach((pathI) => {
    let img = new Image();
    img.src = pathI;
    sharkyIdleImages.push(img);
});

/*################*/
/*## PUFFERFISH ##*/
/*################*/

pufferfishSwimImages = [];
pufferfishSwimImagesPaths = [
    './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    './img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
];
pufferfishSwimImagesPaths.forEach((pathI) => {
    let img = new Image();
    img.src = pathI;
    pufferfishSwimImages.push(img);
});