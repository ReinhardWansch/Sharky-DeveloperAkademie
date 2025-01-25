/*################*/
/*## BACKGROUND ##*/
/*################*/

let bgObjectsArr= [];

function addBgObjectsToArr(imgPath, width, amount, yPos, speedX) {
    let xPos = 0;
    for (let i = 0; i < amount; i++) {
        xPos = i * width;
        addBgObjectToArr(imgPath, width, xPos, yPos, speedX);
    }
}

function addBgObjectToArr(imgPath, width, xPos, yPos, speedX) {
    let newBgObject = new MOb(imgPath, 1, xPos, yPos);
    newBgObject.speedX = speedX;
    newBgObject.isMoving = true;
    newBgObject.img.decode()
        .then(() => newBgObject.scaleToWidthOnly(width));
    bgObjectsArr.push(newBgObject);
}

//water
addBgObjectsToArr('./img/3. Background/Layers/5. Water/D.png', canvas.width * 2, 10, 0, -3);
//lights
addBgObjectsToArr('./img/3. Background/Layers/1. Light/COMPLETO.png', canvas.width * 2, 3, -450, -0.5);

/*###############*/
/*## CHARACTER ##*/
/*###############*/

let characterObj = new IdleMOb('./img/1.Sharkie/1.IDLE/1.png', 0.25, 10, 50);

/*###########*/
/*## LEVEL ##*/
/*###########*/

let level01 = {
    bgObjects: bgObjectsArr,
    character: characterObj
}