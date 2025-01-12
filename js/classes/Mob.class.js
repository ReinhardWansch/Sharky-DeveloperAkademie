class MoB {
    xPos= 0;
    yPos= 0;
    width= 100;
    height= 100;
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