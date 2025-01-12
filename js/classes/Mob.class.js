class MOb extends DrawableObject {
    speedX = 0;
    speedY = 0;
    repeatingX;

    constructor(imgPath, scale = 1, repeatingX = false, x = 0, y = 0) {
        super(imgPath, scale, x, y);
        this.repeatingX = repeatingX;
    }

    //TODO das ist problematisch weil die Geschwindigkeit dann auch von der Framerate abhängig ist
    //das könnte man mit setItervall machen
    moveForNextFrame() {
        this.xPos += this.speedX;
        this.yPos += this.speedY;
    }

    moveForNextFrameRepeat(ctx) {
        this.xPos = (ctx.canvas.width % this.width) + this.speedX;
    }

    draw(ctx) {
        super.draw(ctx);
        let canvasWidth = ctx.canvas.width;
        let tileCount = Math.floor(canvasWidth / this.width);
        let xOffset = this.xPos + this.width * tileCount;
        if (xOffset < canvasWidth) {
            console.log(xOffset); ///DEBUG
        }
    }
}