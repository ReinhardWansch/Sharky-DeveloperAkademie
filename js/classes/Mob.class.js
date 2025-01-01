class Mob {
    xPos;
    yPos;
    xWidth;
    yWidth;
    img;

    constructor (xWidth, yWidth, xPos=0, yPos=0) {
        this.xPos= xPos;
        this.yPos= yPos;
        this.xWidth= xWidth;
        this.yWidth= yWidth;
    }

    loadImage(imgPath) {
        this.img= new Image();
        this.img.src= imgPath;
    }

    async draw(ctx) {
        await this.img.decode();
        ctx.drawImage(
            this.img, 
            this.xPos, 
            this.yPos, 
            this.xWidth,
            this.yWidth
        )
    }

    moveR() {
        console.log('Mob moving right'); ///DEBUG
    }

    setPos(x,y) {
        this.xPos= x;
        this.yPos= y;
    }

}