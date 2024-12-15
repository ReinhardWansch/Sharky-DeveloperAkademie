class Mob {
    img;
    xPos;
    yPos;

    constructor (xPos=0, yPos=0) {
        this.xPos= xPos;
        this.yPos= yPos;
    }

    loadImage(imgPath) {
        this.img= new Image();
        this.img.src= imgPath;
    }

    moveR() {
        console.log('Mob moving right'); ///DEBUG
    }

}