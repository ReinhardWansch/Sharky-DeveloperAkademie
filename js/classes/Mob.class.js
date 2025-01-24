class MOb extends DrawableObject {
    speedX = 0;
    speedY = 0;

    constructor(imgPath, scale = 1, x = 0, y = 0) {
        super(imgPath, scale, x, y);
    }

    moveForNextFrame(ctx) {
        this.xPos += this.speedX;
        this.yPos += this.speedY;
    }

    draw(ctx) {
        super.draw(ctx);
        this.moveForNextFrame(ctx);
    }
}