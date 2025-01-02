class Mob {
    xPos= 120;
    yPos= 150;
    width= 203;
    height= 250;
    img;

    constructor () {
    }

    loadImage(imgPath) {
        this.img= new Image();
        this.img.src= imgPath;
    }

    moveR() {
        console.log('Mob moving right'); ///DEBUG
    }

}